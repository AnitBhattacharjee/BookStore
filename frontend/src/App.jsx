import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' elements={<Home/> } />
      <Route path='/book/create' elements={<CreateBook/> } />
      <Route path='/book/details/:id' elements={<ShowBook/> } />
      <Route path='/book/edit/:id' elements={<EditBook/> } />
      <Route path='/book/delete/:id' elements={<DeleteBook/> } />
    </Routes>
  );
};

export default App