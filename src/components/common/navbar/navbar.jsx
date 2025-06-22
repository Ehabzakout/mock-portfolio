import { useContext, useEffect, useState } from "react";
import Logo from "../logo/logo";
import Styles from "./navbar.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import MobileMenu from "../../features/mobile-menu/mobile-menu.jsx";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { themeContext } from "../../providers/theme.provider.jsx";
import useActiveLink from "../../../hooks/useActiveLink.js";

export default function Navbar() {
	const [visible, setVisible] = useState(true);
	const { changeTheme, theme } = useContext(themeContext);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme) {
			changeTheme(theme);
		} else changeTheme("dark");
	}, []);

	useEffect(() => {
		function checkToplevelScroll() {
			if (window.scrollY > 200) setVisible(false);
			else setVisible(true);
		}
		window.addEventListener("scroll", checkToplevelScroll);
		return () => {
			window.removeEventListener("scroll", checkToplevelScroll);
		};
	}, []);

	function handleClick(id) {
		const target = document.getElementById(id);
		if (target) {
			const y = target.getBoundingClientRect().top + window.scrollY - 100;
			window.scrollTo({ top: y });
		}
	}

	/**
	 * @param {{href:string,title:string}[]} links
	 */
	const links = [
		{ href: "home", title: "Home" },
		{ href: "about", title: "About" },
		{ href: "skills", title: "Skills" },
		{ href: "education", title: "Education" },
		{ href: "projects", title: "Projects" },
	];
	const activeLink = useActiveLink(links);

	return (
		<>
			<nav className={` ${Styles.navbar}`}>
				<Logo />
				<ul className={Styles.list}>
					{links.map((item) => {
						return (
							<li key={item.title}>
								<a
									onClick={() => {
										handleClick(item.href);
									}}
									className={`${activeLink === item.href ? Styles.active : ""}`}
								>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
				<div className={`${Styles.navIcons}`}>
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
					<MobileMenu links={links} handleClick={handleClick} />
					<div className={Styles.contact}>
						<a onClick={() => handleClick("contact")}>Contact me</a>
						<MdOutlineArrowOutward />
					</div>
				</div>
			</nav>
			<div
				className={`${Styles.navBackground} ${visible ? Styles.animate : ""} `}
			></div>
		</>
	);
}
