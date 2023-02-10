import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactBar from "./Components/ContactBar";
import "./App.css";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
      <ContactBar />
      <Footer />
    </main>
  );
}

export default App;
