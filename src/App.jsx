import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Logo from "./components/Header/Logo";
import Counter from "./components/Header/Counter";
import SideBar from "./components/SideBar/Sidebar";
import ItemList from "./components/ItemList/ItemList";
import { useItemStore } from "./stores/itemStores.js";
// import { useState, useEffect } from "react";

function App() {
	// ** Local Storage ** (using persist from Zustand instead)
	// const [items, setItems] = useState(
	// 	() => JSON.parse(localStorage.getItem("items")) || initialItems
	// );

	// useEffect(() => {
	// 	const data = JSON.stringify(items);
	// 	localStorage.setItem("items", data);
	// }, [items]);

	const items = useItemStore((state) => state.items);

	const numberOfPackedItems = items.filter((item) => item.packed).length;

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header>
					<Logo />
					<Counter
						totalNumberOfItems={items.length}
						numberOfPackedItems={numberOfPackedItems}
					/>
				</Header>
				<ItemList />
				<SideBar />
			</main>
			<Footer />
		</>
	);
}

export default App;
