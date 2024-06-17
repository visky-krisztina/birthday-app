import Person from "./Person";
import { useAllPeopleContext } from "../pages/AllPersons";
import "./styles/PeopleContainer.css";

const PeopleContainer = () => {
	const people = useAllPeopleContext();
	//console.log("All persons: ", people);
	if (!people || people.length === 0) {
		return (
			<div>
				<h2> No people to display..</h2>
			</div>
		);
	}
	return (
		<div className='peopleContainer'>
			{people.map((persona) => {
				return <Person key={persona._id} {...persona} />;
			})}
		</div>
	);
};
export default PeopleContainer;
