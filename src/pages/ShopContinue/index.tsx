import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spineer from "../../components/Spineer";

const ShopContinue: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();


	// Simulando o carregamento de 2 segundos
	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	const handleProductClick = (productId: number) => {
		navigate(`/product/${productId}`);
	};

	if (isLoading) {
		return <Spineer />;
	}

	return (
		<div className="min-h-screen">
			<div className="px-8 py-12">
				<div className=" flex flex-col items-center justify-center">
					<h1 className="text-2xl font-bold mb-4">MAIS VISTOS</h1>
				</div>
				{/* Lista de Produtos mais vistos */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="p-2 text-center cursor-pointer"
							onClick={() => handleProductClick(index + 1)}
						>
							<div className="h-[700px] w-full bg-gray-300 mb-4 flex items-center justify-center">
								<img
									src="https://via.placeholder.com"
									alt={`Produto ${index + 1}`}
									className="object-contain h-full"
								/>
							</div>
							<h3 className="font-lg text-lg mb-1">
								Hoodie de Competição {index + 1}
							</h3>
							<p className="text-sm text-gray-500">95,00 BRL</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShopContinue;
