import { useState } from "react";
import { DownChevron, Html5, ReactLogo, CSS } from "../assets/Icons";
import styles from "./fileExplorer.module.css";
import File from "./file";

export default function FileExplorer({ className }: { className?: string }) {
	const [isOpen, setIsOpen] = useState(false); // Boolean state

	return (
		<section className={`${styles.explorer} ${className}`}>
			<p className={styles.title}>Explorer</p>
			<div className={styles.project}>
				<label
					htmlFor="checkbox"
					className={`${styles.chevron} ${isOpen ? styles.active : ""}`}
				>
					<DownChevron />
				</label>
				<input
					onChange={() => setIsOpen((prev) => !prev)} // Toggle boolean state
					type="checkbox"
					id="checkbox"
					hidden
				/>
				<span>PersonalPortfolio</span>
			</div>
			<div>
				<File title={"Home.jsx"} icon={ReactLogo} />
				<File title={"About.html"} icon={Html5} />
				<File title={"Styles.css"} icon={CSS} />
			</div>
		</section>
	);
}
