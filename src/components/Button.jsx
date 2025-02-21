export default function Button({ buttonType, children, handleClick }) {
	return (
		<button
			onClick={handleClick}
			className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
			{children}
		</button>
	);
}
