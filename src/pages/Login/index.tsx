import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
				<h1 className="text-3xl font-bold text-center">CONECTE-SE</h1>

				<form className="space-y-6">
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
						<div className="relative">
							<input
								type="password"
								id="password"
								className="w-full p-3 mt-1 border border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
								placeholder="Sua senha"
								required
							/>
							<Link
								to="/forgot-password"
								className="right-0 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
							>
								Você esqueceu sua senha?
							</Link>
						</div>
					</div>

					{/* Botão de Cadastro */}
					<button
						type="submit"
						className="w-full py-3 mt-6 text-white bg-black hover:bg-gray-800"
					>
						CADASTRE-SE
					</button>
				</form>

				<div className="text-center">
					<Link to="/account/register" className="text-sm text-black hover:underline">
						Criar uma conta
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
