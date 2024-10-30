import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const isAuthenticated = !!localStorage.getItem("token");
	// return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/account/register" element={<Register />} />
					<Route path="/account" element={<Login />} />
					<Route
						path="/dashboard"
						element={
							<>teste</>
						}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
