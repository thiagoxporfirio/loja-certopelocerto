import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

const ProductNotFound: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
			<div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
				<FaBoxOpen className="text-gray-400 text-6xl mb-4" />
				<h1 className="text-3xl font-bold text-gray-700 mb-2">
					Produto Não Encontrado
				</h1>
				<p className="text-gray-500 mb-6">
					O produto que você está procurando não foi encontrado ou não está
					disponível no momento.
				</p>
				<Link
					to="/shop"
					className="inline-block px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
				>
					Voltar para a Loja
				</Link>
			</div>
		</div>
	);
};

export default ProductNotFound;
