import React from 'react';
import './App.css';
import MainPage from './Pages/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoxPage from './Pages/BoxPage';
import NavBar from './components/Navbar';
import Purchases from './Pages/Purchases';
import FormPage from './Pages/FormPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/0" component={MainPage} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/1" render={() => <NavBar content={BoxPage} />} />
      <Route exact path="/2" render={() => <NavBar content={Purchases} />} />
      <Route exact path="/3" render={() => <NavBar content={FormPage} />} />
    </Router>
  );
};

export default App;
