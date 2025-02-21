import Button from "../Button";
import { useItemStore } from "../../stores/itemStores";

export default function ButtonGroup() {
	const { markAllComplete, markAllIncomplete, removeAllItems, resetToInitial } =
		useItemStore();

	const secondaryButton = [
		{ text: "Mark all as complete", handleClick: markAllComplete },
		{ text: "Mark all as incomplete", handleClick: markAllIncomplete },
		{ text: "Remove all items", handleClick: removeAllItems },
		{ text: "Reset to initial", handleClick: resetToInitial },
	];
	return (
		<section className="button-group">
			{secondaryButton.map((button) => (
				<Button
					key={button.text}
					handleClick={button.handleClick}
					buttonType="secondary">
					{button.text}
				</Button>
			))}
		</section>
	);
}
