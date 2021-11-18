import './App.css';
import { Route } from 'react-router';
import Home from "./Screens/Home/Home"
import NavBar from "./Layout/NavBar/NavBar"
import Footer from './Layout/Footer/Footer';
import Media from './Screens/Media/Media';
import WhoWeServe from './Screens/WhoWeServe/WhoWeServe';
import Contact from './Screens/Contact/Contact';
import Donate from './Screens/Donate/Donate';
import Shop from './Shop/Shop';
import SocialBar from './Components/SocialBar/SocialBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialBar />
      
      <Route exact path="/" >
        <Home />
      </Route>

      {/* <Route exact path="/events" >
        <Events />
      </Route> */}

      <Route exact path="/whoweserve" >
        <WhoWeServe />
      </Route>

      <Route exact path="/donate" >
        <Donate />
      </Route>

      <Route exact path="/shop" >
        <Shop />
      </Route>

      <Route exact path="/media" >
        <Media />
      </Route>

      <Route exact path="/contact" >
        <Contact />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
