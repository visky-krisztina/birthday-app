import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, AddPerson, Stats, AllPersons, LandingPage, Dashboard } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <AddPerson />,
					},
					{
						path: "all-persons",
						element: <AllPersons />,
					},
					{
						path: "stats",
						element: <Stats />,
					},
				],
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
