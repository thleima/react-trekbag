import EmptyView from "../EmptyView";
import Select from "react-select";
import { useState, useMemo } from "react";
import { sortingOptions } from "../../lib/constants.js";
import { useItemStore } from "../../stores/itemStores";

export default function ItemList() {
	const [sortBy, setSortBy] = useState("default");
	const { items, deleteItem, toggleItem } = useItemStore();

	// useMemo is used to run the sorting function only when the items or sortBy value changes - and not at every render
	let sortedItems = useMemo(() => {
		return [...items].sort((a, b) => {
			switch (sortBy) {
				case "default":
					return 0;
				case "packed":
					return b.packed - a.packed;
				case "unpacked":
					return a.packed - b.packed;
				case "alphabetical":
					return a.name.localeCompare(b.name);
				default:
					return 0;
			}
		});
	}, [items, sortBy]);

	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyView />}
			{items.length > 0 && (
				<section className="sorting">
					<Select
						onChange={(option) => setSortBy(option.value)}
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
					/>
				</section>
			)}
			{sortedItems.map((item) => (
				<Item
					key={item.id}
					item={item}
					handleRemoveItem={deleteItem}
					handleToggleItem={toggleItem}
				/>
			))}
		</ul>
	);
}

function Item({ item, handleRemoveItem, handleToggleItem }) {
	return (
		<li className="item">
			<label>
				<input
					type="checkbox"
					checked={item.packed}
					onChange={() => handleToggleItem(item)}
				/>
				{item.name}
			</label>
			<button onClick={() => handleRemoveItem(item)}>❌</button>
		</li>
	);
}
