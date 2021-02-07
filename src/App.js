import Chat from "./components/Chat"
import Relief from "./components/Relief"
import Meditate from "./components/Meditate"


import './App.css';
import './uOttaHackStyles.css'
import './circle.css'


import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';





function App() {

  

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path='/' exact component={Relief}/>
      <Route path="/chat" component={Chat}/> 
      <Route path="/meditate" component={Meditate}/> 
      
      
      </Switch>
    </div>
    </Router>
  );
}



export default App;