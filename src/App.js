import FirstHome from "./components/pages/FirstHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pricing from "./components/pages/Pricing";
import Payment from "./components/pages/Payment";
import "react-chatbot-kit/build/main.css";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FirstHome />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/microroute">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
