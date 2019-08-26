import React from 'react';
import './App.css';
import MainPage from './Pages/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoxPage from './Pages/BoxPage';
import NavBar from './components/Navbar';
import Purchases from './Pages/Purchases';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/0" component={MainPage} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/1" render={() => <NavBar content={BoxPage} />} />
      <Route exact path="/2" render={() => <NavBar content={Purchases} />} />
    </Router>
  );
};

export default App;
