import Styles from "./theme-toggle.module.css";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { themeContext } from "../../../../providers/theme.provider";
export default function ThemeToggle() {
	const { theme, changeTheme } = useContext(themeContext);
	return (
		<>
			{theme === "dark" ? (
				<IoSunnyOutline
					className={`${Styles.themeIcon}`}
					onClick={() => changeTheme("light")}
				/>
			) : (
				<FiMoon
					className={`${Styles.themeIcon}`}
					onClick={() => changeTheme("dark")}
				/>
			)}
		</>
	);
}
