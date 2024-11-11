import React from "react";
import { Link } from "react-router-dom";

const Initial: React.FC = () => {
	return (
		<div className="min-h-screen">
			{/* Imagem Esticada */}
			<div className="relative h-screen">
				<img
					src="https://via.placeholder.com/1920x1080"
					alt="Imagem Inicial Fake"
					className="object-cover w-full h-full"
				/>
			</div>

			{/* Novidades */}
			<div className="px-8 py-12">
				<h2 className="text-3xl font-bold text-center mb-8">CHEGANDO AGORA!</h2>

				{/* Lista de Produtos - Placeholder */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index} className="p-2 text-center">
							<div className="h-[600px] w-full bg-gray-300 mb-4 flex items-center justify-center">
								<img
									src="https://via.placeholder.com"
									alt={`Produto ${index + 1}`}
									className="object-contain h-full"
								/>
							</div>
							<h3 className="font-medium text-lg mb-1">
								Hoodie de Competição {index + 1}
							</h3>
							<p className="text-sm text-gray-500">95,00 BRL</p>
						</div>
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
