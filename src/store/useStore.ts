import { create } from 'zustand';
import { Html5, ReactLogo, CSS, JS } from "../assets/Icons";

// Define tab types that correspond to sidebar items
export type TabId = "home" | "about" | "skills" | "projects" | "contact" | "resume";

export interface Tab {
    id: TabId;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    active: boolean;
}

// File structure for the explorer
export interface FileItem {
    id: TabId;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive: boolean;
}

interface StoreState {
    tabs: Tab[];
    files: FileItem[];
    activateTab: (tabId: TabId) => void;
    closeTab: (tabId: TabId) => void;
    selectFile: (fileId: TabId) => void;
}

export const useStore = create<StoreState>((set, get) => ({
    // Initial tabs
    tabs: [
        { id: "home", title: "Home.jsx", icon: ReactLogo, active: true },
    ],

    // Initial files in explorer
    files: [
        { id: "home", name: "Home.jsx", icon: ReactLogo, isActive: true },
        { id: "about", name: "About.jsx", icon: ReactLogo, isActive: false },
        { id: "skills", name: "Skills.html", icon: Html5, isActive: false },
        { id: "projects", name: "Projects.jsx", icon: ReactLogo, isActive: false },
        { id: "contact", name: "Contact.css", icon: CSS, isActive: false },
        { id: "resume", name: "Resume.js", icon: JS, isActive: false },
    ],

    // Activate a tab and update file explorer selection
    activateTab: (tabId: TabId) => {
        set(state => ({
            tabs: state.tabs.map(tab => ({
                ...tab,
                active: tab.id === tabId
            })),
            files: state.files.map(file => ({
                ...file,
                isActive: file.id === tabId
            }))
        }));
    },

    // Close a tab
    closeTab: (tabId: TabId) => {
        const state = get();
        // Don't allow closing the last tab
        if (state.tabs.length <= 1) return;

        const isClosingActiveTab = state.tabs.find(tab => tab.id === tabId)?.active;
        const remainingTabs = state.tabs.filter(tab => tab.id !== tabId);

        if (isClosingActiveTab && remainingTabs.length > 0) {
            // If closing active tab, activate the next tab or the previous one
            const indexToActivate = state.tabs.findIndex(tab => tab.id === tabId);
            const newActiveIndex = indexToActivate >= remainingTabs.length ? remainingTabs.length - 1 : indexToActivate;
            const newActiveTabId = remainingTabs[newActiveIndex].id;

            set({
                tabs: remainingTabs.map((tab, index) => ({
                    ...tab,
                    active: index === newActiveIndex
                })),
                files: state.files.map(file => ({
                    ...file,
                    isActive: file.id === newActiveTabId
                }))
            });
        } else {
            set({ tabs: remainingTabs });
        }
    },

    // Select a file in the explorer
    selectFile: (fileId: TabId) => {
        const state = get();

        // Update file selection
        set({
            files: state.files.map(file => ({
                ...file,
                isActive: file.id === fileId
            }))
        });

        // Check if tab already exists
        const tabExists = state.tabs.some(tab => tab.id === fileId);

        if (tabExists) {
            // Activate existing tab
            set({
                tabs: state.tabs.map(tab => ({
                    ...tab,
                    active: tab.id === fileId
                }))
            });
        } else {
            // Find file details
            const fileDetails = state.files.find(file => file.id === fileId);
            if (!fileDetails) return;

            // Create new tab
            const newTab: Tab = {
                id: fileId,
                title: fileDetails.name,
                icon: fileDetails.icon,
                active: true
            };

            // Add new tab and make it active
            set({
                tabs: state.tabs.map(tab => ({
                    ...tab,
                    active: false
                })).concat(newTab)
            });
        }
    }
}));
