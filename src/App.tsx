import FileExplorer from "./components/fileExplorer.tsx";
import Header from "./components/header.tsx";
import SidePanel from "./components/sidepanel.tsx";
import Footer from "./components/footer.tsx";
import MainDisplay from "./components/mainDisplay.tsx";
import styles from "./App.module.css";

export default function App() {
	return (
		<>
			<div className={styles.appContainer}>
				<Header className={styles.header} />
				<SidePanel className={styles.sidepanel} />
				<FileExplorer className={styles.fileExplorer} />
				<MainDisplay className={styles.mainDisplay} />
				<Footer className={styles.footer} />
			</div>
		</>
	);
}