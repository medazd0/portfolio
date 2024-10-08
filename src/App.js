import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Pojects from './components/Projects.jsx'
import ContactMed from './components/ContactMed.jsx'
class App extends Component {
  render() {
    return (
      < div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900  ">
          <div className='fixed top-0 -z-10 h-full w-full'>
                    <div class=" absolute  top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>    
          <div className='container mx-auto px-8'>     
                    <Navbar />
                    <Hero />
                    <About />
                    <Technologies /> 
                    <Experience />
                    <Pojects />
                    <ContactMed />
                   
         
          </div>
      </div>    
    );
  }
}


export default App;
