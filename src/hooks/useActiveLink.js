import { useEffect, useState } from "react";

export default function useActiveLink(sections) {
	const [activeLink, setActiveLink] = useState("home");

	useEffect(() => {
		let currentSection = sections[0];

		function handleScroll() {
			for (let { href } of sections) {
				const section = document.getElementById(href);
				if (section) {
					const rect = section.getBoundingClientRect().top;

					if (rect < 210) {
						currentSection = href;
					}
				}
				if (window.scrollY > 3500) currentSection = null;
			}

			setActiveLink(currentSection);
		}
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return activeLink;
}
