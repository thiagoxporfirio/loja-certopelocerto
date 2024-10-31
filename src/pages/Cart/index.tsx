import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			name: "HOODIE NHS 8000 RPM",
			size: "S",
			price: 95.0,
			quantity: 1,
			image: "https://via.placeholder.com/150"
		},
		{
			id: 1,
			name: "HOODIE NHS 8000 RPM",
			size: "S",
			price: 95.0,
			quantity: 1,
			image: "https://via.placeholder.com/150"
		},
		{
			id: 1,
			name: "HOODIE NHS 8000 RPM",
			size: "S",
			price: 95.0,
			quantity: 1,
			image: "https://via.placeholder.com/150"
		}
	]);

	const handleQuantityChange = (id: number, amount: number) => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + amount) }
					: item
			)
		);
	};

	const handleRemoveItem = (id: number) => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== id));
	};

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	if (cartItems.length === 0) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold mb-4">CARRINHO</h1>
				<p className="mb-2">Seu carrinho de compras está vazio no momento.</p>
				<Link to="/shop" className="text-blue-500 underline">
					Cotinue com a pesquisa aqui continuar.
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
					{cartItems.map(item => (
						<div key={item.id} className="flex items-center">
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
										onClick={() => handleQuantityChange(item.id, -1)}
										className="border px-2"
									>
										−
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() => handleQuantityChange(item.id, 1)}
										className="border px-2"
									>
										+
									</button>
								</div>
								<button
									onClick={() => handleRemoveItem(item.id)}
									className="text-red-500 mt-2"
								>
									Remover
								</button>
							</div>
							<p className="font-medium">{item.price.toFixed(2)} BRL</p>
						</div>
					))}
				</div>

				{/* Resumo do Carrinho */}
				<div className="p-6 bg-gray-100 shadow-md">
					<h2 className="font-bold mb-4">Subtotal</h2>
					<p className="text-lg mb-4">{subtotal.toFixed(2)} BRL</p>
					<button className="w-full py-3 bg-black text-white mb-4">
						PARA FINALIZAR A COMPRA
					</button>
					<button className="w-full py-3 bg-purple-500 text-white mb-4">
						shopPay
					</button>
					<button className="w-full py-3 bg-yellow-400 text-white">
						PayPal
					</button>
					<p className="text-sm mt-4 text-gray-500">
						Códigos de desconto, custos de envio e impostos são calculados na
						finalização da compra.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
