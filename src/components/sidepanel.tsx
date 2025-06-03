import { useState } from "react";
import styles from "./SidePanel.module.css";
import {
	Extension,
	SideIcon1,
	SideIcon2,
	SideIcon3,
	SideIcon4,
	SideIcon5,
	SideIcon6,
} from "../assets/Icons";
export default function SidePanel({ className }: { className?: string }) {
	const [btn, setBtn] = useState(0);
	function clickHandler(newBtn: number): void {
		setBtn(newBtn);
	}
	return (
		<aside className={className}>
			<div className={styles.topicons}>
				<div
					className={`${btn === 0 ? styles.active : ""} cursor-pointer`}
					onClick={() => clickHandler(0)}
					onKeyDown={() => { }}
				>
					<SideIcon1 />
				</div>
				<div
					className={`${btn === 1 ? styles.active : ""} cursor-pointer`}
					onClick={() => clickHandler(1)}
					onKeyDown={() => { }}
				>
					<SideIcon2 />
				</div>
				<div
					className={`${btn === 2 ? styles.active : ""} cursor-pointer`}
					onClick={() => clickHandler(2)}
				>
					<SideIcon3 />
				</div>
				<div
					className={`${btn === 3 ? styles.active : ""} cursor-pointer`}
					onClick={() => clickHandler(3)}
				>
					<SideIcon4 />
				</div>
				<div
					className={`${btn === 4 ? styles.active : ""} cursor-pointer`}
					onClick={() => clickHandler(4)}
				>
					<Extension />
				</div>
			</div>

			<div className={styles.explorer}>
				<div>
					<div
						className={`${btn === 5 ? styles.active : ""} cursor-pointer`}
						onClick={() => clickHandler(5)}
					>
						<SideIcon5 />
					</div>
					<div
						className={`${btn === 6 ? styles.active : ""} cursor-pointer`}
						onClick={() => clickHandler(6)}
					>
						<SideIcon6 />
					</div>
				</div>
			</div>
		</aside>
	);
}
