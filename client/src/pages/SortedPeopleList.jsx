import SortedPeopleContainer from "../components/SortedPeopleContainer";

import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
	try {
		const response = await customFetch.get("/people");
		const data = response.data;
		//console.log("Fetched data:", data);
		return data;
	} catch (error) {
		toast.error(error?.response?.data?.msg || "Error fetching people");
		return error; // Return a default structure
	}
};

const SortedPeopleContext = createContext();

const SortedPeopleList = () => {
	const { people } = useLoaderData();
	return (
		<SortedPeopleContext.Provider value={people}>
			<SortedPeopleContainer />
		</SortedPeopleContext.Provider>
	);
};
export const useSortedPeopleContext = () => useContext(SortedPeopleContext);
export default SortedPeopleList;
