import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactInfo from "./pages/ContactInfo";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
