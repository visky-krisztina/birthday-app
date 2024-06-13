import { Outlet } from "react-router-dom";

import { Navbar, BigSidebar, SmallSidebar } from "../components";

import { useState, createContext, useContext } from "react";
import "./styles/Dashboard.css";

const DashboardContext = createContext();
const Dashboard = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleDarkTheme = () => {
		console.log("toggle dark theme");
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
			<main className='dashboard'>
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className='dashboard-page'>
						<Outlet />
					</div>
				</div>
			</main>
		</DashboardContext.Provider>
	);
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
