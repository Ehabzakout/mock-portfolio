import Styles from "./projects.module.css";
import { MdOpenInNew } from "react-icons/md";

import project1 from "/assets/images/project 1.jpeg";
import project2 from "/assets/images/project 2.jpg";
import project3 from "/assets/images/project 3.png";
import project4 from "/assets/images/project 4.webp";
import project5 from "/assets/images/project 5.jpg";
import project6 from "/assets/images/project 6.jpg";
import { useContext, useEffect } from "react";
import { themeContext } from "./../../components/providers/theme.provider";

const projects = [
	{
		img: project1,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque quos veritatis distinctio, maxime, dolore unde quidem laboriosam est asperiores quas vitae recusandae nam quisquam similique nesciunt, placeat dolores. Nemo.",
		href: "https://google.com",
	},
	{
		img: project2,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque quos veritatis distinctio, maxime, dolore unde quidem laboriosam est asperiores quas vitae recusandae nam quisquam similique nesciunt, placeat dolores. Nemo.",
		href: "https://google.com",
	},
	{
		img: project3,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque quos veritatis distinctio, maxime, dolore unde quidem laboriosam est asperiores quas vitae recusandae nam quisquam similique nesciunt, placeat dolores. Nemo.",
		href: "https://google.com",
	},
	{
		img: project4,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.",
		href: "https://google.com",
	},
	{
		img: project5,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque quos veritatis distinctio, maxime, dolore unde quidem laboriosam est asperiores quas vitae recusandae nam quisquam similique nesciunt, placeat dolores. Nemo.",
		href: "https://google.com",
	},
	{
		img: project6,
		title: "Web Development",
		description:
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quasi.",
		href: "https://google.com",
	},
];

// Project Component
export default function Projects() {
	const { theme } = useContext(themeContext);

	useEffect(() => {
		function showProjects() {
			const projects = document
				.getElementById("projects")
				.getBoundingClientRect().top;
			const project = document.querySelectorAll("#projects > div > div");
			let time = 0;
			if (projects < 155) {
				project.forEach((el) => {
					setTimeout(() => {
						el.classList.add("slideIn");
					}, time);
					time += 500;
				});
			} else if (projects > 1500) {
				project.forEach((project) => project.classList.remove("slideIn"));
				time = 0;
			}
		}
		window.addEventListener("scroll", showProjects);
		return () => {
			window.removeEventListener("scroll", showProjects);
		};
	}, []);
	return (
		<div
			id="projects"
			className={`container ${Styles.myProjects} ${
				theme === "dark" ? Styles.dark : ""
			}`}
		>
			<h1>
				My <span>Projects</span>
			</h1>

			{/* Projects */}
			<div className={`${Styles.projects} `}>
				{projects.map((project, index) => {
					return (
						<div key={index}>
							<img src={project.img} />

							<div>
								<h4>{project.title}</h4>
								<p>{project.description}</p>
								<a href={project.href} title="Open Project" target="_blank">
									<MdOpenInNew />
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
