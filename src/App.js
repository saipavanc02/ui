import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Why from './components/Why/Why';
import Eligibility from './components/Eligibility/Eligibility';
import Knowledge from './components/Knowledge/Knowledge';
import Placement from './components/Placement/Placement';
import KickOff from './components/KickOff/KickOff';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Why/>
      <Eligibility/>
      <Knowledge/>
      <Placement/>
      <KickOff/>
    </div>
  );
}

export default App;
