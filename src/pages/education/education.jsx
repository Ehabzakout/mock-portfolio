import { useContext, useEffect } from "react";
import Styles from "./education.module.css";
import { themeContext } from "./../../components/providers/theme.provider";

export default function Education() {
	const { theme } = useContext(themeContext);

	useEffect(() => {
		function showParagraph() {
			const paragraphs = document.querySelectorAll("#education div p");
			if (paragraphs.length > 0) {
				paragraphs.forEach((el) => {
					let show = el.getBoundingClientRect().top;
					if (show < 400) {
						el.classList.add("slideIn");
					} else if (show > 1200) {
						el.classList.remove("slideIn");
					}
				});
			}
		}

		window.addEventListener("scroll", showParagraph);
		return () => {
			window.removeEventListener("scroll", showParagraph);
		};
	}, []);
	return (
		<div
			id="education"
			className={`${Styles.education} ${
				theme === "dark" ? Styles.dark : ""
			} container`}
		>
			<h1>
				Education <span>& Experience </span>
			</h1>
			<div className={Styles.timeLine}>
				<h3>2025</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
					voluptatum, ullam provident ducimus odit vel recusandae, facilis
					voluptatem laborum aliquam earum, pariatur consequatur tempora
					inventore voluptas. Quasi qui iusto,
				</p>
				<h3>2024</h3>
				<p className={Styles.right}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
					voluptatum, ullam provident ducimus odit vel recusandae, facilis
					voluptatem laborum aliquam earum, pariatur consequatur tempora
					inventore voluptas. Quasi qui iusto,
				</p>
				<h3>2023</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
					voluptatum, ullam provident ducimus odit vel recusandae, facilis
					voluptatem laborum aliquam earum, pariatur consequatur tempora
					inventore voluptas. Quasi qui iusto,
				</p>
			</div>
		</div>
	);
}
