import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
