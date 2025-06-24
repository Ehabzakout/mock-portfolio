import { IoArrowUpCircleOutline } from "react-icons/io5";
export default function TopButton() {
	return (
		<div
			className="topButton"
			onClick={() => console.log(window.scrollTo({ top: 0 }))}
		>
			<IoArrowUpCircleOutline />
		</div>
	);
}
