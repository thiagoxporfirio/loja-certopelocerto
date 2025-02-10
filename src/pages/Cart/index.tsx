import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import ShopContinue from "../ShopContinue";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe("your-publishable-key-here");

const Cart: React.FC = () => {
	const { cart, addToCart, removeFromCart, updateQuantity, totalItems } =
		useCartStore();

	const handleQuantityChange = (id: number, size: string, amount: number) => {
		const item = cart.find(item => item.id === id && item.size === size);
		if (item) {
			const newQuantity = item.quantity + amount;
			if (newQuantity > 0) {
				updateQuantity(id, size, amount);
			} else {
				removeFromCart(id, size);
			}
		}
	};

	const handleRemoveItem = (id: number, size: string) => {
		removeFromCart(id, size);
	};

	const parsePrice = (price: string): number => {
		const numericString = price.replace(/[^\d,.-]/g, "").replace(",", ".");
		return parseFloat(numericString);
	};

	const subtotal = cart.reduce(
		(total, item) => total + parsePrice(item.price) * item.quantity,
		0
	);

	if (cart.length === 0) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold mb-4">CARRINHO</h1>
				<p className="mb-2">Seu carrinho de compras está vazio no momento.</p>
				<Link to="/shop" className="text-blue-500 underline">
					Continue comprando aqui
				</Link>
			</div>
		);
	}

	return (
		<div className="min-h-screen p-8">
			<h1 className="text-3xl text-center font-bold mb-8">CARRINHO</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Lista de Produtos */}
				<div className="col-span-2 space-y-8 mr-10 ml-5">
					{cart.map(item => (
						<div key={`${item.id}-${item.size}`} className="flex items-center">
							<img
								src={item.image}
								alt={item.name}
								className="h-32 w-32 mr-4"
							/>
							<div className="flex-1">
								<h2 className="font-bold text-lg">{item.name}</h2>
								<p className="text-sm">Tamanho: {item.size}</p>
								<div className="flex items-center space-x-2 mt-2">
									<button
										onClick={() => handleQuantityChange(item.id, item.size, -1)}
										className="border px-2"
									>
										−
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() => handleQuantityChange(item.id, item.size, 1)}
										className="border px-2"
									>
										+
									</button>
								</div>
								<button
									onClick={() => handleRemoveItem(item.id, item.size)}
									className="text-red-500 mt-2"
								>
									Remover
								</button>
							</div>
							<p className="font-medium">{item.price} BRL</p>
						</div>
					))}
				</div>

				{/* Resumo do Carrinho */}
				<div className="p-6 bg-gray-100 shadow-md">
					<h2 className="font-bold mb-4">Subtotal</h2>
					<p className="text-lg mb-4">{subtotal.toFixed(2)} BRL</p>
					
					<Elements stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
					<p className="text-sm mt-4 text-gray-500">
						Códigos de desconto, custos de envio e impostos são calculados na
						finalização da compra.
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<hr />

			<ShopContinue />
		</div>
	);
};

export default Cart;
