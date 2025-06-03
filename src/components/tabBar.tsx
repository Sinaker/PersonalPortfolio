import { useState } from "react";
import styles from "./tabBar.module.css";
import { Html5, ReactLogo, CSS, JS } from "../assets/Icons";

interface Tab {
    id: string;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    active: boolean;
}

export default function TabBar() {
    const [tabs, setTabs] = useState<Tab[]>([
        { id: "about", title: "About.jsx", icon: ReactLogo, active: true },
        { id: "skills", title: "Skills.html", icon: Html5, active: false },
        { id: "projects", title: "Projects.jsx", icon: ReactLogo, active: false },
        { id: "contact", title: "Contact.css", icon: CSS, active: false },
        { id: "resume", title: "Resume.js", icon: JS, active: false },
    ]);

    const activateTab = (clickedId: string) => {
        setTabs(tabs.map(tab => ({
            ...tab,
            active: tab.id === clickedId
        })));
    };

    const closeTab = (e: React.MouseEvent, tabId: string) => {
        e.stopPropagation();

        // Don't allow closing the last tab
        if (tabs.length <= 1) return;

        const isClosingActiveTab = tabs.find(tab => tab.id === tabId)?.active;
        const remainingTabs = tabs.filter(tab => tab.id !== tabId);

        if (isClosingActiveTab && remainingTabs.length > 0) {
            // If closing active tab, activate the next tab or the previous one if closing the last tab
            const indexToActivate = tabs.findIndex(tab => tab.id === tabId);
            const newActiveIndex = indexToActivate >= remainingTabs.length ? remainingTabs.length - 1 : indexToActivate;

            setTabs(remainingTabs.map((tab, index) => ({
                ...tab,
                active: index === newActiveIndex
            })));
        } else {
            setTabs(remainingTabs);
        }
    };

    return (
        <div className={styles.tabBar}>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`${styles.tab} ${tab.active ? styles.activeTab : ""}`}
                    onClick={() => activateTab(tab.id)}
                >
                    <span className={styles.tabIcon}>{<tab.icon />}</span>
                    <span className={styles.tabTitle}>{tab.title}</span>
                    <button
                        className={styles.closeTab}
                        onClick={(e) => closeTab(e, tab.id)}
                        title="Close"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}
