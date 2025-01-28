import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spineer from "../../components/Spineer";
import bhomem from "../../assets/bhomem.jpg";
import blackhomem from "../../assets/blackhomem.jpg";
import branco from "../../assets/branco.jpg";

const New: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const productImages = [
		{ primary: bhomem, secondary: blackhomem },
		{ primary: blackhomem, secondary: branco },
		{ primary: branco, secondary: bhomem },
		{ primary: bhomem, secondary: blackhomem },
		{ primary: blackhomem, secondary: branco },
		{ primary: branco, secondary: bhomem },
		{ primary: bhomem, secondary: blackhomem },
		{ primary: blackhomem, secondary: branco },
	];

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
				{/* Lista de Produtos - Placeholder */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{productImages.map((images, index) => (
						<div
							key={index}
							className="p-2 text-center cursor-pointer group"
							onClick={() => handleProductClick(index + 1)}
						>
							<div className="h-[700px] w-full bg-gray-300 mb-4 flex items-center justify-center relative">
								<img
									src={images.primary}
									alt={`Produto ${index + 1}`}
									className="object-contain h-full w-full group-hover:hidden"
								/>
								<img
									src={images.secondary}
									alt={`Produto ${index + 1} - Hover`}
									className="object-contain h-full w-full hidden group-hover:block absolute inset-0"
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

export default New;
