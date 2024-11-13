import { create } from "zustand";

interface CartItem {
	id: number;
	name: string;
	price: string;
	size: string;
	quantity: number;
	image: string;
}

interface CartStore {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number, size?: string) => void;
	updateQuantity: (id: number, size: string, amount: number) => void;
	clearCart: () => void;
	totalItems: number;
}

export const useCartStore = create<CartStore>(set => ({
	cart: [],
	totalItems: 0,

	addToCart: (item: CartItem) =>
		set(state => {
			const existingItemIndex = state.cart.findIndex(
				cartItem => cartItem.id === item.id && cartItem.size === item.size
			);

			let newCart;
			if (existingItemIndex >= 0) {
				newCart = state.cart.map((cartItem, index) =>
					index === existingItemIndex
						? { ...cartItem, quantity: cartItem.quantity + item.quantity }
						: cartItem
				);
			} else {
				newCart = [...state.cart, { ...item, quantity: item.quantity }];
			}

			return {
				cart: newCart,
				totalItems: newCart.reduce((total, item) => total + item.quantity, 0)
			};
		}),

	removeFromCart: (id: number, size?: string) =>
		set(state => {
			const newCart = state.cart.filter(
				item => item.id !== id || (size && item.size !== size)
			);
			return {
				cart: newCart,
				totalItems: newCart.reduce((total, item) => total + item.quantity, 0)
			};
		}),

	updateQuantity: (id: number, size: string, amount: number) =>
		set(state => {
			const newCart = state.cart.map(item =>
				item.id === id && item.size === size
					? { ...item, quantity: Math.max(1, item.quantity + amount) }
					: item
			);
			return {
				cart: newCart,
				totalItems: newCart.reduce((total, item) => total + item.quantity, 0)
			};
		}),

	clearCart: () => set(() => ({ cart: [], totalItems: 0 }))
}));
