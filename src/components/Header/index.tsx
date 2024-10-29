import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";


const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center p-4 border-b">
			<nav className="flex space-x-6">
				<Link to="/novo" className="text-sm font-semibold">
					NOVO
				</Link>
				<Link to="/comprar" className="text-sm font-semibold">
					COMPRAR
				</Link>
				<Link to="/midia" className="text-sm font-semibold">
					MÍDIA
				</Link>
			</nav>

			<div>
				<img src={logo} alt="Logo" className="h-16" />
			</div>

			<nav className="flex space-x-6">
				<Link to="/pt" className="text-sm font-semibold">
					PT
				</Link>
				<Link to="/conta" className="text-sm font-semibold">
					CONTA
				</Link>
				<Link to="/bolsa" className="text-sm font-semibold">
					BOLSA
				</Link>
			</nav>
		</header>
	);
};

export default Header;
