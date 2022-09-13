import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddValue from './features/presentation/fragments/AddValue';
import EditValue from './features/presentation/fragments/EditValue';
import ShowValue from './features/presentation/fragments/ShowValue';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <Routes>
          <Route path='/' element=
          {
            <ShowValue />
          } />
          <Route path='add' element=
          {
            <AddValue />
          } />
          <Route path='edit/:id' element=
          {
            <EditValue />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
