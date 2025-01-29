import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carrosel1 from "../../assets/carrosel.jpg";
import carrosel2 from "../../assets/carrosel2.jpg";
import bhomem from "../../assets/bhomem.jpg";
import blackhomem from "../../assets/blackhomem.jpg";
import branco from "../../assets/branco.jpg";

const Initial: React.FC = () => {
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

	return (
		<div className="min-h-screen">
			{/* Carrossel de Imagens */}
			<div className="relative h-screen">
				<Carousel
					autoPlay
					infiniteLoop
					showThumbs={false}
					showStatus={false}
					className="h-full"
				>
					{[carrosel1, carrosel2].map((src, index) => (
						<div key={index} className="h-full">
							<img src={src} alt={`Imagem ${index + 1}`} className="object-cover w-full h-full" />
						</div>
					))}
				</Carousel>
				<div className="absolute inset-0 flex items-center justify-center">
					<Link
						to="/shop"
						className="px-6 py-3 bg-black text-white hover:bg-gray-800"
					>
						VER TUDO
					</Link>
				</div>
			</div>

			{/* Novidades */}
			<div className="px-8 py-12">
				<h2 className="text-3xl font-bold text-center mb-8">CHEGANDO AGORA!</h2>

				{/* Lista de Produtos - Placeholder */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{productImages.map((images, index) => (
						<Link
							to={`/product/${index + 1}`} // Link para a página do produto com o ID do produto
							key={index}
							className="p-2 block group"
						>
							<div className="h-[600px] w-full bg-gray-300 mb-4 flex items-center justify-center relative">
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
							<h3 className="text-sm mb-1 text-left">
								Hoodie de Competição {index + 1}
							</h3>
							<p className="text-sm text-gray-500 text-left">95,00 BRL</p>
						</Link>
					))}
				</div>

				{/* Botão - Todos os Produtos */}
				<div className="text-center mt-12">
					<Link
						to="/shop"
						className="px-6 py-3 bg-black text-white hover:bg-gray-800"
					>
						VER TUDO
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Initial;
