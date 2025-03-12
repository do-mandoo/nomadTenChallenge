import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../MovieApp.module.css';

const MovieItem = ({ id, name, thumbnail }) => {
  return (
    <div className={styles.movieItemWrap}>
      <Link to={`/character/${id}`}>
        <h2 className={styles.h2font}>{name}</h2>
        <img
          className={styles.img}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='캐릭터 이미지'
        />
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default MovieItem;
