import { useContext, useEffect } from "react";
import Styles from "./skills.module.css";
import { themeContext } from "./../../components/providers/theme.provider";
export default function Skills() {
	const { theme } = useContext(themeContext);

	useEffect(() => {
		function handleSpanPercentage() {
			const skillsPosition = document
				.getElementById("skills")
				.getBoundingClientRect().top;

			const spans = document.querySelectorAll("#skills > div > div > span");
			if (skillsPosition < 155) {
				if (spans.length > 0) {
					spans.forEach(
						(span) => (span.style.width = `${span.dataset.percent}%`)
					);
				}
			}
			if (skillsPosition > 1000) {
				if (spans.length > 0) {
					spans.forEach((span) => (span.style.width = `0%`));
				}
			}
		}
		window.addEventListener("scroll", handleSpanPercentage);
		return () => {
			window.removeEventListener("scroll", handleSpanPercentage);
		};
	}, []);

	return (
		<div
			id="skills"
			className={`container ${Styles.skills} ${
				theme === "dark" ? Styles.dark : ""
			} `}
		>
			<h1>
				My <span>Skills</span>
			</h1>

			<div>
				<h3>HTML</h3>
				<div>
					<span data-percent={75}></span>
				</div>
			</div>
			<div>
				<h3>CSS</h3>
				<div>
					<span data-percent={45}></span>
				</div>
			</div>
			<div>
				<h3>Java Script</h3>
				<div>
					<span data-percent={60}></span>
				</div>
			</div>
			<div>
				<h3>React js</h3>
				<div>
					<span data-percent={35}></span>
				</div>
			</div>
		</div>
	);
}
