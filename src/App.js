
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
} from './components';
function App() {
  return (
    // <div className="App">
    //   hello world
    // </div>
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
    
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>

      <div>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
