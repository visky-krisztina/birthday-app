import Person from "./Person";
import { useSortedPeopleContext } from "../pages/SortedPeopleList";
// import { FaBirthdayCake } from "react-icons/fa";
import "./styles/SortedPeopleContainer.css";
import logo from "../assets/images/present.svg";

const SortedPeopleContainer = () => {
	const people = useSortedPeopleContext();
	const today = new Date();
	const currentMonth = today.getMonth();
	const nextMonth = (currentMonth + 1) % 12;

	// Function to calculate days until the next birthday
	const daysUntilNextBirthday = (birthDate) => {
		const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
		if (nextBirthday < today) {
			nextBirthday.setFullYear(today.getFullYear() + 1);
		}
		return Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
	};

	const sortedPeople = [...people]
		.filter((person) => {
			const birthDate = new Date(person.birthDate);
			const personMonth = birthDate.getMonth();
			const personDay = birthDate.getDate();

			// Include persons whose birthday is this month or next month
			if (personMonth === currentMonth && personDay >= today.getDate()) {
				return true;
			} else if (personMonth === nextMonth) {
				return true;
			}
			return false;
		})
		.sort((a, b) => {
			const dateA = new Date(a.birthDate);
			const dateB = new Date(b.birthDate);
			return daysUntilNextBirthday(dateA) - daysUntilNextBirthday(dateB);
		});

	// If there are fewer than 4 people after filtering, add more to the list to make it up to 4
	while (sortedPeople.length < 4 && people.length > sortedPeople.length) {
		const remainingPeople = people.filter((person) => !sortedPeople.includes(person));
		const nextPerson = remainingPeople.sort((a, b) => {
			const dateA = new Date(a.birthDate);
			const dateB = new Date(b.birthDate);
			return daysUntilNextBirthday(dateA) - daysUntilNextBirthday(dateB);
		})[0];
		sortedPeople.push(nextPerson);
	}

	if (sortedPeople.length === 0) {
		return (
			<div>
				<h2> No people to display..</h2>
			</div>
		);
	}
	return (
		<div className='displayBirthdays'>
			<h2>Who is gonna have birthday very soon?</h2>
			<div className='displayInfo'>
				<img src={logo} alt='birthday' className='b-icon' />

				<div className='birthdayPerson'>
					<Person {...sortedPeople[0]} />
				</div>
			</div>
			<h2>And who is/are next in line?</h2>

			<div className='peopleContainer'>
				{sortedPeople.slice(1).map((person, index) => (
					<Person key={person._id} index={index + 1} {...person} />
				))}
			</div>
		</div>
	);
};
export default SortedPeopleContainer;
