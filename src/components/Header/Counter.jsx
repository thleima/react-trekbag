export default function Counter({ totalNumberOfItems, numberOfPackedItems }) {
	return (
		<p>
			<b>{numberOfPackedItems}</b>/
			{totalNumberOfItems > 1
				? `${totalNumberOfItems} items `
				: `${totalNumberOfItems} item `}
			packed
		</p>
	);
}
