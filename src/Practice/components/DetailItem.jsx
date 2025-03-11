import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../MovieApp.module.css';

const DetailItem = ({ name, thumbnail, seriesItems, comicsItems }) => {
  return (
    <div className={styles.detailItemWrap}>
      <Link className={styles.detailLinkfont} to='/'>
        &lt;Back
      </Link>
      <h1 className={styles.detailH1font}>{name}</h1>
      <div className={styles.detailImgListBox}>
        <div className={styles.liBox}>
          <h3>- COMICS -</h3>
          <ul>
            {comicsItems?.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <img
          className={styles.detailImg}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='캐릭터 이미지'
        />
        <div className={styles.liBox}>
          <h3>- SERIES -</h3>
          <ul>
            {seriesItems?.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

DetailItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comicsItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  seriesItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailItem;
