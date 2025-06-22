import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
	const [scrollPer, setScrollPer] = useState(0);
	useEffect(() => {
		function handleScroll() {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const percentage = (scrollTop / docHeight) * 100;
			setScrollPer(percentage);
		}
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: `${scrollPer}%`,
				height: "5px",
				backgroundImage:
					"linear-gradient(to right, var(--main-color), var(--light-background))",

				zIndex: 9999,
				transition: "width 0.25s ease-out",
			}}
		></div>
	);
}
