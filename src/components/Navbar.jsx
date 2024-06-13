import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import "./styles/Navbar.css";

import { useDashboardContext } from "../pages/Dashboard";
const Navbar = () => {
	const { toggleSidebar } = useDashboardContext();
	return (
		<div className='nav-container'>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h4 className='logo-text'>Datavid Cake Tracker</h4>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
