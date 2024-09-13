import React from 'react';
import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';

function Movies({ movies, addMovieList, removeMovie }) {
    return (
        <div>
            <h1>
                Daftar Film Populer
            </h1>
            <MovieForm addMovieList={addMovieList} />
            <MovieList movies={movies} removeMovie={removeMovie} />
        </div>
    );
}

export default Movies;