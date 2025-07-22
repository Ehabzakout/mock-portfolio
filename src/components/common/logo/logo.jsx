import Styles from "./logo.module.css";
export default function Logo() {
	return (
		<div>
			<a href="#home" className={`${Styles.logo}`}>
				Your Name
			</a>
		</div>
	);
}
