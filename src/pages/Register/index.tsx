import React from "react";

const Register: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
				<h1 className="text-3xl font-bold text-center">CRIAR UMA CONTA</h1>

				<form className="space-y-4">
					{/* Primeiro Nome */}
					<div>
						<label htmlFor="firstName" className="block text-sm font-medium">
							PRIMEIRO NOME
						</label>
						<input
							type="text"
							id="firstName"
							className="w-full p-3 mt-1 border border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
							placeholder="Seu primeiro nome"
							required
						/>
					</div>

					{/* Sobrenome */}
					<div>
						<label htmlFor="lastName" className="block text-sm font-medium">
							SOBRENOME
						</label>
						<input
							type="text"
							id="lastName"
							className="w-full p-3 mt-1 border border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
							placeholder="Seu sobrenome"
							required
						/>
					</div>

					{/* E-mail */}
					<div>
						<label htmlFor="email" className="block text-sm font-medium">
							E-MAIL
						</label>
						<input
							type="email"
							id="email"
							className="w-full p-3 mt-1 border border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
							placeholder="Seu e-mail"
							required
						/>
					</div>

					{/* Senha */}
					<div>
						<label htmlFor="password" className="block text-sm font-medium">
							SENHA
						</label>
						<input
							type="password"
							id="password"
							className="w-full p-3 mt-1 border border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
							placeholder="Sua senha"
							required
						/>
					</div>

					{/* Botão Criar */}
					<button
						type="submit"
						className="w-full py-3 mt-6 text-white bg-black hover:bg-gray-800"
					>
						CRIAR
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
