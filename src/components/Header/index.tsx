import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMouseEnter = () => setIsDropdownOpen(true);
	const handleMouseLeave = () => setIsDropdownOpen(false);

	return (
		<header className="relative flex justify-between items-center p-4 border-b">
			<nav className="flex space-x-6">
				<CustomLink to="/new" text="NEW" />
				<div
					className="relative"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<CustomLink to="/shop" text="SHOP" />
					{isDropdownOpen && (
						<div className="absolute top-full left-0 mt-2 w-64 bg-gray-100 p-4 shadow-lg">
							<h4 className="font-bold mb-2">COLLECTIONS</h4>
							<ul className="space-y-1">
								<li>
									<Link to="/collections/drifting">Drifting Machines</Link>
								</li>
								<li>
									<Link to="/collections/daily">No Half Sends | Daily 24</Link>
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
					)}
				</div>
			</nav>

			<div>
				<img src={logo} alt="Logo" className="h-16" />
			</div>

			<nav className="flex space-x-6">
				<CustomLink to="/account" text="CONTA" />
				<CustomLink to="/bolsa" text="CARRINHO" />
			</nav>
		</header>
	);
};

interface CustomLinkProps {
	to: string;
	text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, text }) => (
	<Link to={to} className="relative text-sm font-semibold group">
		{text}
		<span className="block h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
	</Link>
);

export default Header;
