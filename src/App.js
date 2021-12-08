import FirstHome from "./components/pages/FirstHome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pricing from "./components/pages/Pricing";
import Payment from "./components/pages/Payment";


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
          <Route path='/payment'>
            <Payment/>
          </Route>
      </Switch>
        </div>          
    </Router>

  );
}

export default App;
