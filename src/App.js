import "./App.css";
import {
	Home,
	ErrorPage,
	ContactUs,
	Faq,
	Blog,
	SingleblogPage,
	Career,
} from "./pages";
import { ScrollToTop } from "./Components";
import { Header, Footer } from "./Layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* place nav bar here*/}
				<Header />
				<Routes>
					<Route path="/" element={<Blog />} />
					<Route path="blogArticle/:id" element={<SingleblogPage />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
				<Footer />
				{/* place footer here */}
			</ScrollToTop>
		</Router>
	);
};

export default App;
