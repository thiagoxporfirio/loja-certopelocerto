import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMouseEnter = () => setIsDropdownOpen(true);
	const handleMouseLeave = () => setIsDropdownOpen(false);

	return (
		<header className="relative flex justify-between items-center p-8 border-b border-t">
			<nav className="flex items-center space-x-8">
				<CustomLink to="/new" text="NEW" />
				<div
					className="relative flex items-center"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<CustomLink to="/shop" text="SHOP" />
					{isDropdownOpen && (
						<div
							className="absolute left-0 top-full mt-0 w-screen bg-gray-100 py-8 shadow-lg z-10"
							style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
						>
							<div className="max-w-screen-xl mx-auto px-4">
								<h4 className="font-bold mb-4">COLLECTIONS</h4>
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
				<img src={logo} alt="Logo" className="h-16" />
			</div>

			<nav className="flex items-center space-x-8">
				<CustomLink to="/account" text="CONTA" />
				<CustomLink to="/cart" text="CARRINHO" />
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
		<span className="block h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
	</Link>
);

export default Header;
