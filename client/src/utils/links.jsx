import { IoBarChartSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";

const links = [
	{ text: "add person", path: ".", icon: <IoPersonAddSharp /> },
	{ text: "all persons", path: "all-persons", icon: <IoIosPeople /> },
	{ text: "stats", path: "stats", icon: <IoBarChartSharp /> },
];

export default links;
