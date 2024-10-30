import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center p-4 border-b">
			<nav className="flex space-x-6">
				<Link to="/new" className="text-sm font-semibold">
					NOVO
				</Link>
				<Link to="/buy" className="text-sm font-semibold">
					COMPRAR
				</Link>
			</nav>

			<div>
				<img src={logo} alt="Logo" className="h-16" />
			</div>

			<nav className="flex space-x-6">
				<Link to="/account" className="text-sm font-semibold">
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
