import FirstHome from "./components/pages/FirstHome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pricing from "./components/pages/Pricing";


function App() {
  return (
    <Router>
        <div className="App">
      <Switch>
          <Route exact path='/'>
            <FirstHome/>
          </Route>
          <Route path='/pricing'>
            <Pricing/>
          </Route>
      </Switch>
        </div>          
    </Router>

  );
}

export default App;
