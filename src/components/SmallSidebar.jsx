import "./styles/SmallSidebar.css";
import { useDashboardContext } from "../pages/Dashboard";
import { FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	return (
		<div className='smallSidebar-container'>
			<div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
				<div className='content'>
					<button type='button' className='close-btn' onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<div className='nav-links'>
						{links.map((link) => {
							const { text, path, icon } = link;

							return (
								<NavLink to={path} key={text} className='nav-link' onClick={console.log("clicked!")}>
									<span className='icon'>{icon}</span>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default SmallSidebar;
