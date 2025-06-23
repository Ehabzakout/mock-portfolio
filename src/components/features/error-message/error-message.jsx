export default function ErrorMessage({ children }) {
	return (
		<>
			{children && (
				<p
					style={{
						color: "red",
						fontSize: "12px",
						marginBottom: "0",
					}}
				>
					* {children}
				</p>
			)}
		</>
	);
}
