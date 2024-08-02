// src/App.js
import React, { useEffect, useState } from 'react';
import fetchMovies from '../api/fetchMovies';
import styles from './MoviesList.module.css'
function MoviesList(genre) {
  const [movies, setMovies] = useState(null);
  // console.log(genre)
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(genre.genre);
      setMovies(data.movies.slice(0,20));
    };

    getMovies();
  }, []);

  return (
<div className={styles.container}>
      {movies ? (
        <div className={styles.movies}>
          {movies.slice(0,10).map((movie, index) => (
            <div key={index} className={styles.movie}>
              <img className={styles.movieImage} src={movie.image} alt={movie.title} />
              {/* Uncomment below if you want to display title and description */}
              {/* <h1>Movie name: {movie.title}</h1>
              <p>Description: {movie.description}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default MoviesList;
