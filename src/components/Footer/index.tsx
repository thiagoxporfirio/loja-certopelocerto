import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-100 p-6 md:p-10">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Contato */}
				<div>
					<h4 className="font-bold mb-2">CONTATO</h4>
					<p>support@certopelocerto.com</p>
					<div className="flex space-x-4 mt-4">
						<FaInstagram size={24} />
						<FaYoutube size={24} />
						<FaTiktok size={24} />
					</div>
				</div>

				{/* Informação */}
				<div>
					<h4 className="font-bold mb-2">INFORMAÇÃO</h4>
					<ul className="space-y-2">
						<li>Termos e Condições</li>
						<li>Proteção de dados</li>
					</ul>
				</div>

				{/* Serviço */}
				<div>
					<h4 className="font-bold mb-2">SERVIÇO</h4>
					<ul className="space-y-2">
						<li>Remessa</li>
						<li>Metodos de Pagamentos</li>
						<li>Trocas e Devoluções</li>
					</ul>
				</div>

				{/* Boletim Informativo */}
				<div>
					<h4 className="font-bold mb-2">BOLETIM INFORMATIVO</h4>
					<div className="flex flex-col md:flex-row mb-2 space-y-2 md:space-y-0">
						<input
							type="email"
							placeholder="endereço de email"
							className="p-2 h-10 border border-black w-full md:w-2/3 text-sm"
						/>
						<button className="bg-black text-white h-10 px-6 md:w-1/3 text-sm">
							Inscrever-se
						</button>
					</div>
					<div className="flex items-start">
						<input type="checkbox" className="mr-2 mt-1" />
						<p className="text-sm">
							CONCORDO COM OS{" "}
							<a href="#" className="underline">
								TERMOS E CONDIÇÕES
							</a>{" "}
							e com a declaração de{" "}
							<a href="#" className="underline">
								proteção de DADOS
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
