
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavBar } from './components/NavBar/NavBar';
import Banner from './components/Banner';
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
