import Typewriter from "typewriter-effect";
import Styles from "./type.module.css";
export default function TypewriterDemo() {
	return (
		<div className={`${Styles.type}`}>
			<Typewriter
				options={{
					strings: ["Front End Developer"],
					autoStart: true,
					loop: true,
					deleteSpeed: 80,
				}}
			/>
		</div>
	);
}
