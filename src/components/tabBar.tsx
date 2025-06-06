import { useStore } from "../store/useStore";
import styles from "./tabBar.module.css";

export default function TabBar() {
    const { tabs, activateTab, closeTab } = useStore();

    const handleTabClick = (tabId: string) => {
        activateTab(tabId as any);
    };

    const handleTabClose = (e: React.MouseEvent, tabId: string) => {
        e.stopPropagation();
        closeTab(tabId as any);
    };

    return (
        <div className={styles.tabBar}>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`${styles.tab} ${tab.active ? styles.activeTab : ""}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    <span className={styles.tabIcon}>{<tab.icon />}</span>
                    <span className={styles.tabTitle}>{tab.title}</span>
                    <button
                        className={styles.closeTab}
                        onClick={(e) => handleTabClose(e, tab.id)}
                        title="Close"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}