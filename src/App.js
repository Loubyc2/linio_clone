import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
