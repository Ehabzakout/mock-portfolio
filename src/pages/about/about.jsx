import profileImg from "/assets/images/profile-photo.png";
import Styles from "./about.module.css";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../components/providers/theme.provider";
export default function About() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const handleAnimate = () => {
			const target = document.getElementById("about");
			if (target) {
				let scroll = target.getBoundingClientRect().top;
				if (scroll < 200) {
					setAnimate(true);
				} else {
					if (window.scrollY <= 100) setAnimate(false);
				}
			}
		};
		window.addEventListener("scroll", handleAnimate);
		return () => {
			window.removeEventListener("scroll", handleAnimate);
		};
	}, [animate]);

	const { theme } = useContext(themeContext);
	return (
		<div
			id="about"
			className={`container ${Styles.about} ${animate ? "slideIn" : ""} ${
				theme === "dark" ? Styles.dark : ""
			}`}
		>
			<div className={Styles.photo}>
				<img src={profileImg}></img>
			</div>
			<div className={Styles.person}>
				<p>About Me</p>
				<p>Front End Developer</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam
					corrupti? Tempora ea quod explicabo ducimus natus quo incidunt nemo
					earum, quia optio non iure sequi illo nesciunt ab quis voluptas quae,
					dolor eos, eius veritatis quam sunt. Nam quo repellendus libero. Et
					expedita velit odit id optio, distinctio impedit ipsum adipisci sequi
					aut iste nam minus, est sapiente similique ipsam officiis mollitia
					fuga unde! Quam dolor tempore, vero hic aliquid similique eaque
					explicabo voluptatibus doloremque odit numquam ut magni neque, quod
					corporis sed omnis asperiores non qui eius, ad voluptate? Quos
					quibusdam a dolor totam sapiente non magni modi?
				</p>
			</div>
		</div>
	);
}
