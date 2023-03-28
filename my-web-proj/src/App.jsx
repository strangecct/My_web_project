
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavBar } from './components/NavBar/NavBar';
import Banner from './components/Banner';
import Skills from "./components/Skills";
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/footer';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
