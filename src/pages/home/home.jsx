import Styles from "./home.module.css";
import handImg from "/public/assets/images/hand-icon.png";
import TypewriterDemo from "../../components/features/typewriter/typewriter";
import profilePhoto from "/assets/images/profile-photo.png";
import { useContext } from "react";
import { themeContext } from "./../../components/providers/theme.provider";
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Home() {
	const { theme } = useContext(themeContext);
	return (
		<div className={`container ${Styles.home}`}>
			<div className={Styles.person}>
				<div>
					<h3>Hello It's Me</h3>
					<img src={handImg} />
				</div>
				<h1>Ramzy Zakout</h1>
				<div>
					<p>And I'm a</p>
					<TypewriterDemo />
				</div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam numquam
					dignissimos atque necessitatibus qui, eius quod cum perferendis maxime
					tenetur, voluptas incidunt molestiae consectetur.
				</p>

				<a
					href="/my-resume.pdf"
					download
					className={theme === "dark" ? Styles.dark : ""}
				>
					My Resume
					<span>
						<LuDownload />
					</span>
				</a>
				<div
					className={`${Styles.links} ${theme === "dark" ? Styles.dark : ""}`}
				>
					<a href="http://github.com" target="_blank">
						<FaGithub />
					</a>
					<a href="http://linkedin.com" target="_blank">
						<FaLinkedin />
					</a>
				</div>
			</div>
			<div className={Styles.photo}>
				<div className={Styles.animate}>
					<img src={profilePhoto} />
				</div>
			</div>
		</div>
	);
}
