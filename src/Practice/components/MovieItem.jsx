import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../MovieApp.module.css';

const MovieItem = ({ id, name, thumbnail }) => {
  return (
    <div className={styles.movieItemWrap}>
      <h2 className={styles.h2font}>
        <Link className={styles.linkfont} to={`/character/${id}`}>
          {name}
        </Link>
      </h2>
      <img
        className={styles.img}
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt='캐릭터 이미지'
      />
    </div>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MovieItem;
