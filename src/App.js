import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Customize from './components/Customize';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Customize></Customize>
      </Route>
          <Route exact path='/checkout'>
            CheckOut
      </Route>

        </Switch>

      </Router>




      
    </div>
  );
}

export default App;
