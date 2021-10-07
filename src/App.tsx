import './scss/index.scss';
import Navbar from './components/Navbar';

// Sections 
import HeroSection from './sections/HeroSection';
import Why from './sections/Why';
import Themes from './sections/Themes';

function App() {
  return (
    <div id="App">
        <Navbar/>
        <HeroSection/>
        <main>
            <Why/>
            <Themes/>
        </main>
    </div>
  );
}

export default App;
