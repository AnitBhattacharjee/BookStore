import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' elements={ } />
      <Route path='/book/create' elements={ } />
      <Route path='/book/details/:id' elements={ } />
      <Route path='/book/edit/:id' elements={ } />
      <Route path='/book/delete/:id' elements={ } />
    </Routes>
  )
}

export default App