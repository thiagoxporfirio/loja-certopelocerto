import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore"; // Importe a store do carrinho
import logo from "../../assets/logo.jpg";


const Header: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	const navigate = useNavigate();

	const totalItems = useCartStore(state => state.totalItems); // Acessa o total de itens da store

	const handleMouseEnter = () => setIsDropdownOpen(true);
	const handleMouseLeave = () => setIsDropdownOpen(false);

	const handleLogoClick = () => {
		navigate("/");
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 220) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`${
				isFixed
					? "fixed top-0 left-0 w-full bg-white shadow-lg z-20"
					: "relative"
			} transition-all duration-300 ease-in-out flex justify-between items-center p-4 md:p-8 border-b border-t`}
		>
			<nav className="flex items-center space-x-8">
				<CustomLink to="/new" text="NOVO" />
				<div
					className="relative flex items-center"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<CustomLink to="/shop" text="COMPRAR" />
					{isDropdownOpen && (
						<div
							className="absolute left-0 top-full mt-0 w-screen bg-gray-100 py-8 shadow-lg z-10"
							style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
						>
							<div className="max-w-screen-xl mx-auto px-4">
								<h4 className="font-bold mb-4">COLEÇÕES</h4>
								<ul className="space-y-1">
									<li>
										<Link to="/collections/drifting">Drifting Machines</Link>
									</li>
									<li>
										<Link to="/collections/daily">
											No Half Sends | Daily 24
										</Link>
									</li>
									<li>
										<Link to="/collections/flatout">Flat Out</Link>
									</li>
									<li>
										<Link to="/collections/endless">Endless Sands</Link>
									</li>
									<li>
										<Link to="/collections/attitude">Full Sends Attitude</Link>
									</li>
									<li>
										<Link to="/collections/motorverse">Motorverse</Link>
									</li>
									<li>
										<Link to="/collections/racing">Racing Community</Link>
									</li>
									<li>
										<Link to="/collections/legends">Legends</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>

			<div className="flex items-center">
				<img src={logo} alt="Logo" className="h-16 cursor-pointer" onClick={handleLogoClick} />
			</div>

			<nav className="flex items-center space-x-8">
				<CustomLink to="/account" text="CONTA" />
				<div className="relative">
					<CustomLink to="/cart" text="CARRINHO" />
					{/* Totalizador de itens do carrinho */}
					{totalItems > 0 && (
						<span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
							{totalItems}
						</span>
					)}
				</div>
			</nav>
		</header>
	);
};

interface CustomLinkProps {
	to: string;
	text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, text }) => (
	<Link
		to={to}
		className="relative text-sm font-semibold group flex items-center"
	>
		{text}
		<span className="block h-[2px] bg-black w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
	</Link>
);

export default Header;
