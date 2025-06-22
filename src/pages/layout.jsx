import Navbar from "../components/common/navbar/navbar.jsx";
import ScrollProgressBar from "../components/features/scroll-progress/scroll-progress.jsx";
import TypewriterDemo from "../components/features/typewriter/typewriter.jsx";
import ThemeProvider from "../components/providers/theme.provider.jsx";
import About from "./about/about.jsx";
import Education from "./education/education.jsx";
import Home from "./home/home.jsx";
import Projects from "./projects/projects.jsx";
import Skills from "./skills/skills.jsx";

export default function Layout() {
	return (
		<ThemeProvider>
			<div>
				<ScrollProgressBar />
				<Navbar />
				<div className="layout" id="home">
					<Home />
					<About />
					<Skills />
					<Education />
					<Projects />
				</div>
			</div>
		</ThemeProvider>
	);
}
