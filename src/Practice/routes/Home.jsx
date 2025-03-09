import React, { useEffect, useState } from 'react';
import MovieItem from '../components/MovieItem';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies, 'home MO');
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(item => (
            <MovieItem
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              runtime={item.runtime}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
