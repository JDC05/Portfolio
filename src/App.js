import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Skills />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </BrowserRouter>     
    </div>
  );
}

export default App;
