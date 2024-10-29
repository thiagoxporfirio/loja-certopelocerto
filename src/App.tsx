import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
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
					{/* <Route path="/" element={<Home />} /> */}
					{/* <Route path="/login" element={<Login />} /> */}
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
