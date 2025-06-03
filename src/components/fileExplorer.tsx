import { useState } from "react";
import { DownChevron } from "../assets/Icons";
import styles from "./fileExplorer.module.css";
import File from "./file";
import { useStore, TabId } from "../store/useStore";

export default function FileExplorer({ className }: { className?: string }) {
	const [isOpen, setIsOpen] = useState(true); // Set to true by default to show files
	const { files, selectFile } = useStore();

	const handleFileClick = (fileId: TabId) => {
		selectFile(fileId);
	};

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
					onChange={() => setIsOpen((prev) => !prev)}
					type="checkbox"
					id="checkbox"
					checked={!isOpen}
					hidden
				/>
				<span>PersonalPortfolio</span>
			</div>
			{isOpen && (
				<div>
					{files.map(file => (
						<div
							key={file.id}
							onClick={() => handleFileClick(file.id)}
							className={file.isActive ? styles.activeFile : ""}
						>
							<File title={file.name} icon={file.icon} isActive={file.isActive} />
						</div>
					))}
				</div>
			)}
		</section>
	);
}
