import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import ContactForm, { amount, firstName } from './components/ContactForm.js';
import { Footer } from './components/Footer';
import BotonWp, { amountt, secondName } from "./components/BotonWp.js"
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  return (


    <div className="App">
      <NavBar/>
      <BotonWp />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
