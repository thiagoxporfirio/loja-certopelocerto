import React, { useEffect, useState } from "react";
import Spineer from "../../components/Spineer";

const Shop: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const itemsPerPage = 6;
	const totalItems = 24;

	// Simulando uma lista de produtos
	const products = Array.from({ length: totalItems }).map((_, index) => ({
		id: index + 1,
		name: `Hoodie de Competição ${index + 1}`,
		price: "95,00 BRL",
		image: "https://via.placeholder.com"
	}));

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Simulando o carregamento de 2 segundos
	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	if (isLoading) {
		return <Spineer />;
	}

	return (
		<div className="min-h-screen">
			<div className="px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{currentProducts.map(product => (
						<div key={product.id} className="p-2 text-center">
							<div className="h-[600px] w-full bg-gray-300 mb-4 flex items-center justify-center">
								<img
									src={product.image}
									alt={`Produto ${product.id}`}
									className="object-contain h-full"
								/>
							</div>
							<h3 className="font-medium text-lg mb-1">{product.name}</h3>
							<p className="text-sm text-gray-500">{product.price}</p>
						</div>
					))}
				</div>

				<div className="flex justify-center items-center mt-8 space-x-2">
					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentPage(index + 1)}
							className={`px-4 py-2 border ${
								currentPage === index + 1
									? "bg-black text-white"
									: "bg-white text-black"
							}`}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;
