import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import CenterText from './components/CenterText';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Cordion from './components/cordion';
import SectionFive from './components/SectionFive';
import Footer from './components/Footer';

function App() {
    return(
      <>
      <Navbar/>
      <Background/>
      <CenterText/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Cordion/>
      <Footer/>
      </> 
    )
}

export default App;
