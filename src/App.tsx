import { useEffect } from "react";
import FileExplorer from "./components/fileExplorer.tsx";
import Header from "./components/header.tsx";
import SidePanel from "./components/sidepanel.tsx";
import Footer from "./components/footer.tsx";
import MainDisplay from "./components/mainDisplay.tsx";
import { useStore } from "./store/useStore.ts";
import styles from "./App.module.css";

export default function App() {
	const { isExplorerVisible, toggleExplorer, hideExplorer } = useStore();

	// Keyboard shortcut for Ctrl+B to toggle explorer
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'b') {
				e.preventDefault();
				toggleExplorer();
			}
		};
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [toggleExplorer]);

	// Auto-collapse on mobile
	useEffect(() => {
		const checkMobileView = () => {
			if (window.innerWidth <= 768) {
				hideExplorer();
			}
		};

		// Check on mount
		checkMobileView();

		// Check on resize
		window.addEventListener('resize', checkMobileView);

		return () => {
			window.removeEventListener('resize', checkMobileView);
		};
	}, [hideExplorer]);

	return (
		<>
			<div className={`${styles.appContainer} ${!isExplorerVisible ? styles.explorerHiddenSideBarGone : ''}`}>
				<Header className={styles.header} />
				<SidePanel className={styles.sidepanel} />
				{isExplorerVisible && <FileExplorer className={styles.fileExplorer} />}
				<MainDisplay />
				<Footer className={styles.footer} />
			</div>
		</>
	);
}