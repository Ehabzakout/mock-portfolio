import Styles from "./contact-me.module.css";
import ErrorMessage from "../../components/features/error-message/error-message";
import { themeContext } from "./../../components/providers/theme.provider";
import { useContext } from "react";
import useContactForm from "./hooks/use-form";

export default function ContactMe() {
	const { theme } = useContext(themeContext);
	const { register, char, handleSubmit, onSubmit, errors, setChar } =
		useContactForm();
	return (
		<div
			id="contact"
			className={`${Styles.contact} container ${
				theme === "dark" ? Styles.dark : ""
			}`}
		>
			<h1>Contact Me</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div>
						<input
							placeholder="Your Name..."
							{...register("name", {
								onChange: (e) => (localStorage.name = e.target.value),
							})}
						/>
						<ErrorMessage>{errors.name?.message}</ErrorMessage>
					</div>
					<div>
						<input
							placeholder="Your Email..."
							{...register("email", {
								onChange: (e) => (localStorage.email = e.target.value),
							})}
						/>
						<ErrorMessage>{errors.email?.message}</ErrorMessage>
					</div>
				</div>
				<textarea
					{...register("message", {
						onChange: (e) => {
							localStorage.message = e.target.value;
							setChar(e.target.value.length);
						},
					})}
					placeholder="Message ..."
				/>
				<ErrorMessage>{errors.message?.message}</ErrorMessage>
				<span>{char}/500</span>
				<button>Send Email</button>
			</form>
		</div>
	);
}
