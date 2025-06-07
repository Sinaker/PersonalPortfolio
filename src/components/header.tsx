import { useState } from "react";
import { Search } from "../assets/Icons";
import styles from "./Header.module.css";
import logo from "/vscode.svg";
import toast, { Toaster } from "react-hot-toast";

export default function Header({ className }: { className?: string }) {
	// Track click count for escalating responses
	const [clickCount, setClickCount] = useState(0);
	const [menuClickCount, setMenuClickCount] = useState(0);

	// Arrays of messages for each button
	const yellowMessages = [
		"You weren't supposed to click that...",
		"Really? The yellow button again?",
		"I see you like clicking yellow things.",
		"This button literally does nothing, I promise."
	];

	const greenMessages = [
		"Okay, I may have put some useless buttons here and there.",
		"Green usually means go, but there's nowhere to go.",
		"You found another button that does nothing. Congratulations!",
		"Are you going to explore the actual website or not?"
	];

	const redMessages = [
		"Red usually means danger, but this is just a harmless button.",
		"Stop clicking random buttons and check out my projects!",
		"What did you expect to happen? The site to explode?",
		"You're really thorough with UI testing, aren't you?"
	];

	// Final messages when user clicks too many times
	const finalMessages = [
		"Fine! You win. Here's your achievement: Professional Button Clicker 🏆",
		"I'm running out of clever responses for these buttons...",
		"You know what? I'm actually impressed by your persistence.",
		"If you're this curious about buttons, wait until you see my projects!"
	];

	// Messages for menu items
	const menuMessages = {
		file: [
			"These were for aesthetics only, I promise.",
			"Sorry, no actual files to be found here.",
			"I was supposed to make it look like VSCode, not work like it.",
			"I thought about making this functional, then I remembered I'm not crazy."
		],
		edit: [
			"Edit? The portfolio is read-only!",
			"How about I edit your brain into not clicking random buttons?",
			"Definitely not a random message to fill space.",
		],
		view: [
			"View → Toggle Light Mode → Are you sure?",
			"I promise there's no hidden terminal here.",
			"View → Actual Projects would be a good command right now."
		],
		go: [
			"Go where? You're already here!",
			"Go → To My GitHub would be a good command if this worked.",
			"You could 'go' check out my projects instead of clicking menus."
		],
		run: [
			"Run → The only running happening is the JavaScript on this page.",
			"I would implement a run button, but where would we go?",
			"Run → Away From This Menu would be useful right now."
		],
		terminal: [
			"$ echo 'Totally real terminal here!'",
			"$ sudo make-this-menu-work (Permission denied)",
		],
		help: [
			"Help → About → This is a portfolio, not the real VSCode.",
			"The best help I can offer is to check out my projects section.",
			"Help → Keyboard Shortcuts → Ctrl B toggle sidebar (not here).",
		],
	};

	// Handle button clicks
	const handleButtonClick = (color: string) => {
		// Increment click count
		setClickCount(prevCount => prevCount + 1);

		// Select message array based on color
		let messages;
		let position = "top-right";

		switch (color) {
			case "yellow":
				messages = yellowMessages;
				position = "bottom-right";
				break;
			case "green":
				messages = greenMessages;
				position = "bottom-right";
				break;
			case "red":
				messages = redMessages;
				position = "bottom-right";
				break;
			default:
				messages = yellowMessages;
		}

		// Use final messages if clicked too many times
		if (clickCount > 8) {
			messages = finalMessages;
		}

		// Select random message from array
		const messageIndex = Math.floor(Math.random() * messages.length);

		// Show toast with selected message
		toast(messages[messageIndex], {
			position: position as any,
			duration: 3000,
			style: {
				background: '#1e1e1e',
				color: '#ffffff',
				border: color === 'yellow' ? '1px solid #ffbd44' :
					color === 'green' ? '1px solid #00ca4e' :
						'1px solid #ff605c',
				boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
				padding: '16px',
				fontSize: '14px',
				maxWidth: '320px',
			},
		});
	};

	// Handle menu item clicks
	const handleMenuClick = (menuItem: keyof typeof menuMessages) => {
		// Increment menu click count
		setMenuClickCount(prevCount => prevCount + 1);

		// Get messages for this menu item
		const messages = menuMessages[menuItem];

		// Select message based on click count or random if too many clicks
		let messageIndex = 0;

		if (menuClickCount < messages.length) {
			messageIndex = menuClickCount;
		} else {
			// If clicked more than available messages, choose random
			messageIndex = Math.floor(Math.random() * messages.length);
		}

		// Show toast with selected message
		toast(messages[messageIndex], {
			position: "bottom-left",
			duration: 3000,
			style: {
				background: '#1e1e1e',
				color: '#ffffff',
				border: '1px solid #6c63ff',
				boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
				padding: '16px',
				fontSize: '14px',
				maxWidth: '320px',
			},
			icon: '💻',
		});
	};

	// Easter egg: Click all menu items in sequence
	const [menuSequence, setMenuSequence] = useState<string[]>([]);

	// Check if the user has clicked all menu items in order
	const checkMenuSequence = (newItem: string) => {
		const newSequence = [...menuSequence, newItem];
		setMenuSequence(newSequence);

		// Check if all 7 menu items have been clicked in order
		const allMenuItems = ['file', 'edit', 'view', 'go', 'run', 'terminal', 'help'];

		// Check if user has clicked all menu items in sequence
		const hasSequence = allMenuItems.every((item, index) =>
			index >= newSequence.length || newSequence[index] === item
		);

		// If all items clicked in sequence, show special message
		if (newSequence.length === allMenuItems.length && hasSequence) {
			toast("🎉 You found the secret! You've clicked all menu items in order like a true explorer!", {
				duration: 5000,
				style: {
					background: '#1e1e1e',
					color: '#ffffff',
					border: '1px solid gold',
					boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
					padding: '16px',
					fontSize: '14px',
					maxWidth: '320px',
				},
				icon: '🏆',
			});

			// Reset sequence
			setMenuSequence([]);
		}

		// If sequence is broken, reset
		if (newSequence.length <= allMenuItems.length && !hasSequence) {
			setMenuSequence([newItem]);
		}
	};

	return (
		<div className={`${styles.root} ${className || ""}`}>
			{/* Add Toaster component for displaying toast notifications */}
			<Toaster />

			<div className={styles.logo}>
				<img src={logo} className={styles.logoimg} alt="VSCode Logo" />
			</div>
			<div className={styles.actions}>
				<p onClick={() => { handleMenuClick('file'); checkMenuSequence('file'); }} className={styles.menuItem}>File</p>
				<p onClick={() => { handleMenuClick('edit'); checkMenuSequence('edit'); }} className={styles.menuItem}>Edit</p>
				<p onClick={() => { handleMenuClick('view'); checkMenuSequence('view'); }} className={styles.menuItem}>View</p>
				<p onClick={() => { handleMenuClick('go'); checkMenuSequence('go'); }} className={styles.menuItem}>Go</p>
				<p onClick={() => { handleMenuClick('run'); checkMenuSequence('run'); }} className={styles.menuItem}>Run</p>
				<p onClick={() => { handleMenuClick('terminal'); checkMenuSequence('terminal'); }} className={styles.menuItem}>Terminal</p>
				<p onClick={() => { handleMenuClick('help'); checkMenuSequence('help'); }} className={styles.menuItem}>Help</p>
			</div>
			<div className={styles.title}>
				<Search />
				Kanishk Pandey - Visual Studio Code
			</div>
			<div className={styles.buttons}>
				<span
					className={styles.yellow}
					onClick={() => handleButtonClick("yellow")}
					title="Minimize"
				/>
				<span
					className={styles.green}
					onClick={() => handleButtonClick("green")}
					title="Maximize"
				/>
				<span
					className={styles.red}
					onClick={() => handleButtonClick("red")}
					title="Close"
				/>
			</div>
		</div>
	);
}