import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spineer from "../../components/Spineer";

interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	images: string[];
	sizes: string[];
	details: string[];
	fit: string[];
	info: string[];
}

const ProductDetails: React.FC = () => {
	const { productId } = useParams<{ productId: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	useEffect(() => {
		// Simulação de requisição ao backend para obter detalhes do produto
		setTimeout(() => {
			setProduct({
				id: Number(productId),
				name: "NHS DRIFT TEE",
				price: "49,00 BRL",
				description: "Imposto incluído. Frete calculado na finalização da compra.",
				images: [
					"https://via.placeholder.com/150",
					"https://via.placeholder.com/150",
					"https://via.placeholder.com/150",
					"https://via.placeholder.com/150"
				],
				sizes: ["S", "M", "L", "XL", "2XL"],
				details: [
					"black",
					"210 gsm cotton (carbonized/soft)",
					'Stylized "No Half Sends" front print',
					"Large back print multicolored",
					"Print technology: Screenprint",
					"Material: 100% cotton"
				],
				fit: ["Oversized", "Schäefchen (1.73 m; 65 kg) wears size M"],
				info: [
					"Machine wash, 30°C - cold",
					"Do not bleach",
					"Line dry",
					"Do not dry clean"
				]
			});
			setIsLoading(false);
		}, 2000);
	}, [productId]);

	if (isLoading) {
		return <Spineer />;
	}

	if (!product) {
		return <p>Produto não encontrado.</p>;
	}

	return (
		<div className="min-h-screen p-8 ml-[100px] mr-[100px] flex flex-col md:flex-row">
			{/* Galeria de Imagens */}
			<div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
				{product.images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Produto ${index + 1}`}
						className="w-20 h-20 md:w-32 md:h-32 object-cover cursor-pointer"
					/>
				))}
			</div>

			{/* Detalhes do Produto */}
			<div className="md:w-2/3 md:ml-12">
				<h1 className="text-3xl font-bold mb-2">{product.name}</h1>
				<p className="text-xl font-semibold mb-2">{product.price}</p>
				<p className="text-gray-500 mb-6">{product.description}</p>

				{/* Seletor de Tamanho */}
				<div className="mb-6">
					<h3 className="font-bold mb-2">SIZE</h3>
					<div className="flex space-x-2">
						{product.sizes.map(size => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`px-4 py-2 border ${
									selectedSize === size
										? "bg-black text-white"
										: "bg-white text-black"
								}`}
							>
								{size}
							</button>
						))}
					</div>
				</div>

				{/* Botão de Adicionar ao Carrinho */}
				<button className="w-full py-3 bg-black text-white font-bold mb-8">
					ADICIONAR AO CARRINHO
				</button>

				{/* Seções Detalhadas */}
				<div className="mb-8">
					<h3 className="font-bold mb-2">DETAILS</h3>
					<ul className="list-disc ml-5">
						{product.details.map((detail, index) => (
							<li key={index} className="text-gray-700">
								{detail}
							</li>
						))}
					</ul>
				</div>

				<div className="mb-8">
					<h3 className="font-bold mb-2">SIZE & FIT</h3>
					<ul className="list-disc ml-5">
						{product.fit.map((fit, index) => (
							<li key={index} className="text-gray-700">
								{fit}
							</li>
						))}
					</ul>
				</div>

				<div className="mb-8">
					<h3 className="font-bold mb-2">INFO</h3>
					<ul className="list-disc ml-5">
						{product.info.map((info, index) => (
							<li key={index} className="text-gray-700">
								{info}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;