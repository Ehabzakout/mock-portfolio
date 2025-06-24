import TopButton from "../components/features/go-to-top/top-button.jsx";
import ScrollProgressBar from "../components/features/scroll-progress/scroll-progress.jsx";
import Footer from "../components/layout/footer/footer.jsx";
import Navbar from "../components/layout/navbar/navbar.jsx";
import ThemeProvider from "../components/providers/theme.provider.jsx";
import About from "./about/about.jsx";
import ContactMe from "./contact/contact-me.jsx";
import Education from "./education/education.jsx";
import Home from "./home/home.jsx";
import Projects from "./projects/projects.jsx";
import Skills from "./skills/skills.jsx";
import Testimonials from "./testimonials/testimonials.jsx";

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
					<Testimonials />
					<ContactMe />
					<Footer />
					<TopButton />
				</div>
			</div>
		</ThemeProvider>
	);
}
