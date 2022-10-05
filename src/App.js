import './App.css';
import { Switch, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Crud from "./crud";
import React from 'react'


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path='/' component={<Crud/>} />
      </Routes>
    </div>
  );
}

export default App;
