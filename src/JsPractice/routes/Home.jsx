import React, { useEffect, useState } from 'react';
import MovieItem from '../components/MovieItem';
import styles from '../MovieApp.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setMovies(json.data.results);
    setLoading(false);
  };
  console.log(movies, 'home MO0');
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.background}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.homeBoxWrap}>
          {movies?.map(item => (
            <MovieItem key={item.id} id={item.id} name={item.name} thumbnail={item.thumbnail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
