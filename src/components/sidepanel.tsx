import { useState, useEffect } from "react";
import styles from "./SidePanel.module.css";
import { useStore } from "../store/useStore";
import {
	SideIcon1,
	SideIcon2,
	SideIcon3,
	SideIcon4,
	SideIcon5,
} from "../assets/Icons";

export default function SidePanel({ className }: { className?: string }) {
	const {
		isExplorerVisible,
		toggleExplorer,
		showExplorer,
		activeSidebarIcon,
		setSidebarIcon,
		selectFile
	} = useStore();

	// GitHub profile URL - change this to your actual GitHub URL
	const githubUrl = "https://github.com/Sinaker";

	// Set explorer icon (0) as active by default on component mount
	useEffect(() => {
		if (activeSidebarIcon === null || activeSidebarIcon === undefined) {
			setSidebarIcon(0);
		}
	}, [activeSidebarIcon, setSidebarIcon]);

	function clickHandler(newBtn: number): void {
		// If clicking the explorer icon (0)
		if (newBtn === 0) {
			// If already on explorer icon, toggle visibility
			if (activeSidebarIcon === 0) {
				toggleExplorer();
			} else {
				// If switching to explorer icon, show explorer and set active
				showExplorer();
				setSidebarIcon(0);
			}
		} else {
			// Handle special actions for specific icons
			switch (newBtn) {
				case 1: // GitHub redirect
					window.open(githubUrl, "_blank", "noopener,noreferrer");
					return;
				case 2: // Projects tab
					selectFile("projects");
					setSidebarIcon(newBtn);
					break;
				case 3: // Contact tab
					selectFile("contact");
					setSidebarIcon(newBtn);
					break;
				case 4: // About tab
					selectFile("about");
					setSidebarIcon(newBtn);
					break;
				default:
					break;
			}
		}
	}

	return (
		<aside className={className}>
			<div className={styles.topicons}>
				{/* Explorer - Toggle file explorer */}
				<div
					className={`${activeSidebarIcon === 0 ? styles.active : ""} ${styles.iconContainer}`}
					onClick={() => clickHandler(0)}
					title="Explorer"
				>
					<SideIcon1 />
				</div>

				{/* GitHub - External link */}
				<div
					className={`${styles.iconContainer} ${styles.externalLink}`}
					onClick={() => clickHandler(1)}
					title="Visit GitHub Profile"
				>
					<SideIcon2 />
				</div>

				{/* Projects tab */}
				<div
					className={`${activeSidebarIcon === 2 ? styles.active : ""} ${styles.iconContainer}`}
					onClick={() => clickHandler(2)}
					title="Projects"
				>
					<SideIcon3 />
				</div>

				{/* Contact tab */}
				<div
					className={`${activeSidebarIcon === 3 ? styles.active : ""} ${styles.iconContainer}`}
					onClick={() => clickHandler(3)}
					title="Contact"
				>
					<SideIcon4 />
				</div>
			</div>

			<div className={styles.explorer}>
				{/* About section */}
				<div>
					<div
						className={`${activeSidebarIcon === 4 ? styles.active : ""} ${styles.iconContainer}`}
						onClick={() => clickHandler(4)}
						title="About Me"
					>
						<SideIcon5 />
					</div>
				</div>
			</div>
		</aside>
	);
}