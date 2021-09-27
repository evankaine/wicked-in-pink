import './App.css';
import { Route } from 'react-router';
import Home from "./Screens/Home/Home"
import NavBar from "./Layout/NavBar/NavBar"
import Events from './Screens/Events/Events';
import Footer from './Layout/Footer/Footer';
import Media from './Screens/Media/Media';
import WhoWeServe from './Screens/WhoWeServe/WhoWeServe';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Route exact path="/" >
        <Home />
      </Route>

      <Route exact path="/events" >
        <Events />
      </Route>

      <Route exact path="/whoweserve" >
        <WhoWeServe />
      </Route>

      <Route exact path="/media" >
        <Media />
      </Route>

      
      <Footer />
    </div>
  );
}

export default App;
