import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Navbar>
        <Home />
        <About />
        <Services />
        <Contact />
        <Login />
      </Navbar>
    </>
  );
}

export default App;
