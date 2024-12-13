import styles from "./Header.module.css";
import logo from "/vscode.svg";
export default function Header() {
	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<img src={logo} className={styles.logoimg} alt="VSCode Logo" />
			</div>
			<div className={styles.actions}>
				<p>File</p>
				<p>Edit</p>
				<p>View</p>
				<p>Go</p>
				<p>Run</p>
				<p>Terminal</p>
				<p>Help</p>
			</div>
			<div className={styles.title}>
				<div className={styles.lens}>
					<span className={styles.circle} />
					<span className={styles.handle} />
				</div>
				Kanishk Pandey - Visual Studio Code
			</div>
			<div className={styles.buttons}>
				<span className={styles.yellow} />
				<span className={styles.green} />
				<span className={styles.red} />
			</div>
		</div>
	);
}
