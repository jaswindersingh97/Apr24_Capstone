import React, { useEffect } from 'react'
import styles from './MoviesPage.module.css'
import avatar from './../assets/avtar2.png'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import MoviesList from '../components/MoviesList'

function MoviesPage() {
  const {selectedGenres}=useContext(AppContext)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Super app</p>
        <img src={avatar}/>
      </div>
      <div className={styles.body}>
        <div className={styles.subheading}>
        <p>Entertainment according to your choice</p>
        </div>
        <div className={styles.genres}>
            {selectedGenres?.slice(0, 4)?.map((genre, index) => (
			    <div key={index} className={styles.genre}>
				    <p>{genre}</p>
            <MoviesList genre={genre}/>
          </div>
					))}
				</div>
      </div>
    </div>
  )
}

export default MoviesPage
