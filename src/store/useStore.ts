import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Html5, ReactLogo, CSS, JS } from "../assets/Icons";

// Define tab types that correspond to sidebar items
export type TabId = "home" | "about" | "skills" | "projects" | "contact";

export interface Tab {
    id: TabId;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
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
    isExplorerVisible: boolean;
    activeSidebarIcon: number;
    activeTabId: TabId; // New field to explicitly track active tab
    activateTab: (tabId: TabId) => void;
    closeTab: (tabId: TabId) => void;
    selectFile: (fileId: TabId) => void;
    toggleExplorer: () => void;
    showExplorer: () => void;
    hideExplorer: () => void;
    setSidebarIcon: (iconIndex: number) => void;
}

// Icon mapping for localStorage serialization
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    'ReactLogo': ReactLogo,
    'Html5': Html5,
    'CSS': CSS,
    'JS': JS
};

// Helper function to get icon name from component
const getIconName = (icon: React.FC<React.SVGProps<SVGSVGElement>> | string): string => {
    if (typeof icon === 'string') return icon;

    for (const [name, component] of Object.entries(iconMap)) {
        if (component === icon) return name;
    }
    return 'ReactLogo';
};

// Helper function to get icon component from name
const getIconComponent = (iconName: string): React.FC<React.SVGProps<SVGSVGElement>> => {
    return iconMap[iconName] || ReactLogo;
};

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            // Initial tabs
            tabs: [
                { id: "home", title: "Home.jsx", icon: ReactLogo, active: true },
            ],
            // Initial active tab ID
            activeTabId: "home",

            // Initial files in explorer
            files: [
                { id: "home", name: "Home.jsx", icon: ReactLogo, isActive: true },
                { id: "about", name: "About.js", icon: JS, isActive: false },
                { id: "skills", name: "Skills.html", icon: Html5, isActive: false },
                { id: "projects", name: "Projects.jsx", icon: ReactLogo, isActive: false },
                { id: "contact", name: "Contact.css", icon: CSS, isActive: false },
            ],
            // Explorer visibility state
            isExplorerVisible: true,
            activeSidebarIcon: 0,

            // Toggle explorer visibility
            toggleExplorer: () => {
                set(state => ({ isExplorerVisible: !state.isExplorerVisible }));
            },

            // Show explorer
            showExplorer: () => {
                set({ isExplorerVisible: true });
            },

            // Hide explorer
            hideExplorer: () => {
                set({ isExplorerVisible: false });
            },

            // Set active sidebar icon
            setSidebarIcon: (iconIndex: number) => {
                set({ activeSidebarIcon: iconIndex });
            },

            // Activate a tab and update file explorer selection
            activateTab: (tabId: TabId) => {
                set(state => ({
                    activeTabId: tabId, // Update explicit active tab ID
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
                        activeTabId: newActiveTabId, // Update explicit active tab ID
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
                    set({
                        tabs: remainingTabs,
                        // Ensure file selection is still in sync
                        files: state.files.map(file => ({
                            ...file,
                            isActive: remainingTabs.some(tab => tab.id === file.id && tab.active)
                        }))
                    });
                }
            },

            // Select a file in the explorer
            selectFile: (fileId: TabId) => {
                const state = get();

                // Update file selection in explorer
                set({
                    files: state.files.map(file => ({
                        ...file,
                        isActive: file.id === fileId
                    }))
                });

                // Check if tab already exists
                const existingTab = state.tabs.find(tab => tab.id === fileId);

                if (existingTab) {
                    // Activate existing tab
                    set({
                        activeTabId: fileId, // Update explicit active tab ID
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
                        activeTabId: fileId, // Update explicit active tab ID
                        tabs: state.tabs.map(tab => ({
                            ...tab,
                            active: false
                        })).concat(newTab)
                    });
                }
            }
        }),
        {
            name: 'vscode-portfolio-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                tabs: state.tabs.map(tab => ({
                    ...tab,
                    icon: getIconName(tab.icon)
                })),
                activeTabId: state.activeTabId, // Store the explicit active tab ID
                activeSidebarIcon: state.activeSidebarIcon
            }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    // Convert icon string names back to components
                    state.tabs = state.tabs.map(tab => ({
                        ...tab,
                        icon: typeof tab.icon === 'string' ? getIconComponent(tab.icon as string) : tab.icon
                    }));

                    // Ensure files sync with active tab on rehydration
                    if (state.activeTabId) {
                        state.files = state.files.map(file => ({
                            ...file,
                            isActive: file.id === state.activeTabId
                        }));
                    }
                }
            }
        }
    )
);