import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavComponents/NavBar';
import Home from './Components/HomeComponents/Home';
import Contact from './Components/HomeComponents/Contact';
import MyProjects from './Components/HomeComponents/MyProjects';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route path='/' exact="true" component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/proj' component={MyProjects}/>
        <Route path='/contact' component={Contact}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
