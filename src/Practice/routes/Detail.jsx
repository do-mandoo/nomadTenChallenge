import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../MovieApp.module.css';
import DetailItem from '../components/DetailItem';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
    ).json();
    setDetails(json.data.results);
    setLoading(false);
  };
  console.log(id, 'de');

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.background}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.detailContainer}>
          {details.map(item => (
            <div key={item.id}>
              <DetailItem
                name={item.name}
                thumbnail={item.thumbnail}
                seriesItems={item.series.items}
                comicsItems={item.comics.items}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Detail;
