import { Outlet } from "react-router-dom";

import { Navbar, BigSidebar, SmallSidebar } from "../components";

import { useState, createContext, useContext } from "react";
import "./styles/Dashboard.css";

const DashboardContext = createContext();

const checkDefaultTheme = () => {
	const isDarkTheme = localStorage.getItem("darkTheme") === "true";
	document.body.classList.toggle("dark-theme", isDarkTheme);
	return isDarkTheme;
};

const Dashboard = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
		document.body.classList.toggle("dark-theme", newDarkTheme);
		localStorage.setItem("darkTheme", newDarkTheme);
	};

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<DashboardContext.Provider
			value={{
				showSidebar,
				isDarkTheme,
				toggleDarkTheme,
				toggleSidebar,
			}}
		>
			<div className='dashboard'>
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className='dashboard-page'>
						<Outlet />
					</div>
				</div>
			</div>
		</DashboardContext.Provider>
	);
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
