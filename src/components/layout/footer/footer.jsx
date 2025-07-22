import { useContext } from "react";
import Styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { themeContext } from "../../providers/theme.provider";
export default function Footer() {
	const { theme } = useContext(themeContext);
	const year = new Date().getFullYear();

	return (
		<div
			id="footer"
			className={`${Styles.footer} ${theme === "dark" ? Styles.dark : ""}`}
		>
			<p>Copyright &copy; {year}</p>
			<h4>Your Name</h4>
			<div>
				<a href="http://github.com" target="_blank">
					<FaGithub />
				</a>
				<a href="http://linkedin.com" target="_blank">
					<FaLinkedin />
				</a>
				<a href="http://facebook.com" target="_blank">
					<FaSquareFacebook />
				</a>
			</div>
		</div>
	);
}
