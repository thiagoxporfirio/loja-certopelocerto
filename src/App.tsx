import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Initial from "./pages/Initial";
import New from "./pages/New";
import Shop from "./pages/Shop";
import ForgotPassword from "./pages/Password";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/Product";
import TermsAndConditions from "./pages/TermsAndConditions";
import PaymentMethods from "./pages/PaymentMethods";
import Returns from "./pages/Returns";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_live_51Qqg1LP8BbnibUkSNgH3Knz5AnedZGno4vupSBrJasJHTDBH31nD4sMxO8ahs72li1A0pJw7Z7xGOrwPX4mWfW5C00CRpwuHNa");

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const isAuthenticated = !!localStorage.getItem("token");
	// return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<SnackbarProvider maxSnack={3}>
			<Router>
				<Layout>
					<Elements stripe={stripePromise}>
						<Routes>
							<Route path="/" element={<Initial />} />
							<Route path="/new" element={<New />} />
							<Route path="/product/:productId" element={<ProductDetails />} />
							<Route path="/account/register" element={<Register />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route path="/account" element={<Login />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/terms" element={<TermsAndConditions />} />
							<Route path="/payment" element={<PaymentMethods />} />
							<Route path="/returns" element={<Returns />} />
							<Route
								path="/dashboard"
								element={
									<>teste</>
								}
							/>
						</Routes>
					</Elements>
				</Layout>
			</Router>
		</SnackbarProvider>
	);
}

export default App;

export {};
