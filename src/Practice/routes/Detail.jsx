import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieItem from '../components/MovieItem';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  console.log(details, 'de');

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{details?.title}</h1>
          <MovieItem
            coverImg={details.medium_cover_image}
            title={details.title}
            runtime={details.runtime}
            genres={details.genres}
          />
          <Link to='/'>go home</Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
