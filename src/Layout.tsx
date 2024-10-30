import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marketing from "./components/Marketing";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Marketing />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
