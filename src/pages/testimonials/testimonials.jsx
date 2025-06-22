import { useContext } from "react";
import Styles from "./testimonials.module.css";
import person from "/assets/images/person.webp";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { themeContext } from "./../../components/providers/theme.provider";
export default function Testimonials() {
	const { theme } = useContext(themeContext);
	return (
		<div
			id="testimonials"
			className={`${Styles.testimonials} container ${
				theme === "dark" ? Styles.dark : ""
			}`}
		>
			<h1>Testimonials</h1>
			<div className={Styles.cards}>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
						officia sequi molestias minus porro dolore corrupti, iusto rerum ab
						cum corporis.
					</p>
					<div>
						<img src={person} />
						<div>
							<h4>Ahmed Ahmed</h4>
							<span>CEO</span>
						</div>
					</div>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
						officia sequi molestias minus porro dolore corrupti, iusto rerum ab
						cum corporis.
					</p>
					<div>
						<img src={person} />
						<div>
							<h4>Ahmed Ahmed</h4>
							<span>CEO</span>
						</div>
					</div>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
						officia sequi molestias minus porro dolore corrupti, iusto rerum ab
						cum corporis.
					</p>
					<div>
						<img src={person} />
						<div>
							<h4>Ahmed Ahmed</h4>
							<span>CEO</span>
						</div>
					</div>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
						officia sequi molestias minus porro dolore corrupti, iusto rerum ab
						cum corporis.
					</p>
					<div>
						<img src={person} />
						<div>
							<h4>Ahmed Ahmed</h4>
							<span>CEO</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
