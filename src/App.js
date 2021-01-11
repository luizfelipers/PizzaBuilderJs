import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Customize from './components/Customize';
import React, {useState} from 'react'
import Checkout from './components/Checkout';

function App() {

const [ingredients, setIngredients] = useState({
  basil:false,
  cheese:false,
  mushroom:false,
  olive:false,
  pineapple:false,
  tomato:false,

})




  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Customize
            ingredients={ingredients}
            setIngredients ={setIngredients}
            ></Customize>
      </Route>
          <Route exact path='/checkout'>
           <Checkout ingredients={ingredients}></Checkout>
      </Route>

        </Switch>

      </Router>




      
    </div>
  );
}

export default App;
