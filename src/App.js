import { Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './pages/Book';
import Categories from './pages/Categories';
import Header from './component/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
