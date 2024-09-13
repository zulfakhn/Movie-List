import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import styles from './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovieList = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMoviesList = (index) => {
    const replaceMovies = movies.filter((_, i) => i !== index);
    setMovies(replaceMovies);
  }


  return (
    <Router>
      <div className="main-content">
        <Header /> {/* Tambahkan Header di sini */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies  movies={movies} addMovieList={addMovieList} removeMovie={removeMoviesList} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Tambahkan Footer di sini */}
      </div>
    </Router>
  );
}

export default App;
