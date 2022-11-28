import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</>
	);
}

export default App;