import { createContext, useState } from "react";
import Styles from "../common/navbar/navbar.module.css";

export const themeContext = createContext("");

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("dark");

	function changeTheme(theme) {
		localStorage.setItem("theme", theme);
		setTheme(theme);
		if (theme === "dark") {
			document.documentElement.classList.add(Styles.dark);
			document.documentElement.classList.add(`dark`);
			document.documentElement.style.setProperty("--text-color", "white");
			document.documentElement.style.setProperty("--main-color", "#01ffff");
		} else {
			document.documentElement.classList.remove(Styles.dark);
			document.documentElement.classList.remove("dark");
			document.documentElement.style.setProperty("--text-color", "black");
			document.documentElement.style.setProperty("--main-color", "#029aff");
		}
	}
	return (
		<themeContext.Provider value={{ changeTheme, theme, setTheme }}>
			{children}
		</themeContext.Provider>
	);
}
