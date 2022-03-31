import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Books from './pages/BooksPage';
import Categories from './pages/CategoriesPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
