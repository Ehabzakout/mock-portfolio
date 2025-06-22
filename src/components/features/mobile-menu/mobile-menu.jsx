import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Styles from "./mobile-menu.module.css";
import { useContext, useEffect, useRef } from "react";
import { themeContext } from "../../providers/theme.provider";

export default function MobileMenu({ links, handleClick }) {
	const menuRef = useRef(null);
	const buttonRef = useRef(null);
	const { theme } = useContext(themeContext);

	function handleMenu() {
		if (menuRef) menuRef.current.classList.toggle("open");
	}
	function handleCloseMenu() {
		menuRef.current.classList.remove("open");
	}
	useEffect(() => {
		function addCloseMenuEvent(e) {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target) &&
				!buttonRef.current.contains(e.target)
			)
				handleCloseMenu();
		}

		document.addEventListener("mousedown", addCloseMenuEvent);

		return () => {
			document.removeEventListener("mousedown", addCloseMenuEvent);
		};
	}, []);

	return (
		<>
			<div className={Styles.MobileMenu}>
				<RiMenu3Fill
					className={Styles.icon}
					onClick={() => handleMenu()}
					ref={buttonRef}
				/>

				<div
					className={`${Styles.mobileList} ${theme === "dark" && Styles.dark}`}
					ref={menuRef}
				>
					<div>
						<IoMdClose
							onClick={() => handleCloseMenu()}
							className={`${Styles.icon} close`}
						/>
					</div>
					<ul>
						{links.length > 0 &&
							links?.map((item) => {
								return (
									<a
										key={item.href}
										href={`#${item.href}`}
										onClick={() => {
											handleClick(item.href);
											handleCloseMenu();
										}}
									>
										<li>{item.href}</li>
									</a>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
}
