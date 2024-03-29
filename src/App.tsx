import React from 'react';
import './App.css';
import MainPage from './Pages/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoxPage from './Pages/BoxPage';
import NavBar from './components/Navbar';
import Purchases from './Pages/Purchases';
import FormPage from './Pages/FormPage';
import TwoBoxesPage from './Pages/TwoBoxesPage';
import HOCPage from './Pages/HOCPage';
import { data } from './components/WithDataHOC/data';
import { IDataStorageState } from './interfaces';
export const DataContext = React.createContext<IDataStorageState[]>(data);

const App: React.FC = () => {
  return (
    <DataContext.Provider value={data}>
      <Router>
        <Route exact path="/0" component={MainPage} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/1" render={() => <NavBar content={BoxPage} />} />
        <Route exact path="/2" render={() => <NavBar content={Purchases} />} />
        <Route exact path="/3" render={() => <NavBar content={FormPage} />} />
        <Route
          exact
          path="/4"
          render={() => <NavBar content={TwoBoxesPage} />}
        />
        <Route exact path="/5" render={() => <NavBar content={HOCPage} />} />
      </Router>
    </DataContext.Provider>
  );
};

export default App;
