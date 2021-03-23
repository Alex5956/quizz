import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Jeu from "./components/jeu/Jeu";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/questions/:quizId'} exact>
          <Jeu max={5}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
