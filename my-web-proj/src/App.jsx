
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavBar } from './components/NavBar/NavBar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
    </div>
  );
}

export default App;
