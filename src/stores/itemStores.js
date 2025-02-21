import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemStore = create(
	persist(
		(set) => ({
			items: initialItems,
			addItem: (newItemText) =>
				set((state) => ({
					items: [
						...state.items,
						{ id: new Date().getTime(), name: newItemText, packed: false },
					],
				})),
			deleteItem: (item) =>
				set((state) => ({
					items: state.items.filter((i) => i.id !== item.id),
				})),
			toggleItem: (item) =>
				set((state) => ({
					items: state.items.map((i) => {
						if (i.id === item.id) {
							return { ...i, packed: !i.packed };
						}
						return i;
					}),
				})),
			removeAllItems: () => set(() => ({ items: [] })),
			resetToInitial: () => set(() => ({ items: initialItems })),
			markAllComplete: () =>
				set((state) => {
					const newItems = state.items.map((item) => ({
						...item,
						packed: true,
					}));
					return { items: newItems };
				}),
			markAllIncomplete: () =>
				set((state) => {
					const newItems = state.items.map((item) => ({
						...item,
						packed: false,
					}));
					return { items: newItems };
				}),
		}),
		{ name: "items-storage" }
	)
);
