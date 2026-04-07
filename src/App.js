import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import Speakers from './components/speakers';
import Schedule from './components/schedule';
import Tickets from './components/tickets';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Speakers />
      <Schedule />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
