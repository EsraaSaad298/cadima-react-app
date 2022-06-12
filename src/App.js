import './styling/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Nature from './Nature/Nature';
import Animations from './Animation/Animations';
import SocialMedia from './SocialMedia/SocialMedia';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/socialmedia" element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
