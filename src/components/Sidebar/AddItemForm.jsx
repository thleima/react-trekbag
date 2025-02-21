import Button from "../Button";
import { useState, useRef } from "react";
import { useItemStore } from "../../stores/itemStores";

export default function AddItemForm() {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();
	const { addItem } = useItemStore();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!itemText) {
			alert(`Empty Text`);
			inputRef.current.focus();
			return;
		}
		addItem(itemText);
		setItemText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>
			<input
				ref={inputRef}
				autoFocus
				value={itemText}
				onChange={(e) => {
					setItemText(e.target.value);
				}}
			/>
			<Button>Add to list</Button>
		</form>
	);
}
