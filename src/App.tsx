import './scss/index.scss';
import Navbar from './components/Navbar';

// Sections 
import HeroSection from './sections/HeroSection';
import Why from './sections/Why';
import Themes from './sections/Themes';
import Footer from './components/Footer';

function App() {
  return (
    <div id="App">
        <Navbar/>
        <HeroSection/>
        <main>
            <Why/>
            <Themes/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
