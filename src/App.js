import './styling/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Nature from './Nature/Nature';
import Animations from './Animation/Animations';
import SocialMedia from './SocialMedia/SocialMedia';

function App() {
  
//   window.onorientationchange = function() { 
//     var orientation = window.orientation; 
//       switch(orientation) { 
//         case 0:
//         case 90:
//         case -90: window.location.reload(); 
//         break; 
//     } 
// };

  return (
    <div>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes basename="cadima-react-app">
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
