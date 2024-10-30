import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
				<h1 className="text-3xl font-bold text-center">CONECTE-SE</h1>
				<h2 className="text-2xl font-bold">REDEFINIR SENHA</h2>
				<p>Enviaremos um e-mail para você redefinir sua senha.</p>

				<form className="space-y-4">
					{/* Campo de E-mail */}
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

					{/* Botão Enviar */}
					<button
						type="submit"
						className="w-full py-3 bg-black text-white hover:bg-gray-800"
					>
						ENVIAR
					</button>
				</form>

				{/* Link Cancelar */}
				<div className="text-center">
					<Link to="/account" className="text-sm text-black hover:underline">
						Cancelar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
