import styles from "./footer.module.css";
import { Branch, DoubleTick, ReactFooter } from "../assets/Icons";
export default function Footer({ className }: { className?: string }) {
	return (
		<footer className={`${styles.footer} ${className}`}>
			<div className={styles.footerDiv}>
				<a
					href="https://github.com/Sinaker"
					target="_blank"
					rel="noreferrer noopener"
					className={styles.github}
				>
					<Branch />
					<span>main</span>
				</a>

				<div className={styles.errors}>
					<svg
						width="14"
						height="14"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="Error"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4
                    2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4
                    1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 
                    1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 
                    7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"
						></path>
					</svg>
					<span>0</span>&nbsp;&nbsp;
					<svg
						width="14"
						height="14"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="Warning"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625
                    12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"
						></path>
					</svg>
					<span>0</span>
				</div>
			</div>

			<div className={styles.poweredBy}>
				<div className={styles.poweredByDiv}>
					<ReactFooter />
					<span>React.js</span>
				</div>
				<div className={styles.poweredByDiv}>
					<DoubleTick />
					<p>Prettier</p>
				</div>
			</div>
		</footer>
	);
}
