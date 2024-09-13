import React from 'react';

function MovieList({ movies, removeMovie }) {
    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>
                    {movie.name} : ({movie.year}) {movie.director} & {movie.aktris}
                    <button onClick={() => removeMovie(index)}>Hapus List Film</button>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;