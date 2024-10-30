import React, { useEffect, useState } from "react";
import Spineer from "../../components/Spineer";

const New: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

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
				{/* Lista de Produtos - Placeholder */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
			</div>
		</div>
	);
};

export default New;
