import Header from './component/Header'
import './App.css';
import Home from './component/Homepage'
import Products from './component/Products'
import Item from 'module'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
  
 <Router>
   
   <div className="container">
     <Header></Header>
     <Switch>
       <Route path= "/" exact component={Home}/>
       <Route path= "/products" component={Products}/>
       <Route path= "/products/:id" component={Item}/>
           
     </Switch>
   </div>
 </Router>
  );
}

export default App;
