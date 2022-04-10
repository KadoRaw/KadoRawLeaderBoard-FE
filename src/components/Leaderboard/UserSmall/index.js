import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.css';

function Usersmall({ isUser, dailydif, rank, country, username, weeklymoney }) {
  let classdailydif;
  let imagelink;
  if (dailydif === 0) {
    classdailydif = styles.userinfo;
    imagelink =
      'https://img.icons8.com/material-two-tone/96/000000/horizontal-line.png';
  } else if (dailydif < 0) {
    classdailydif = `${styles.userinfo} ${styles.userdown}`;
    imagelink =
      'https://img.icons8.com/external-phatplus-lineal-phatplus/64/000000/external-down-arrow-essential-phatplus-lineal-phatplus.png';
  } else {
    classdailydif = `${styles.userinfo} ${styles.userup}`;
    imagelink =
      'https://img.icons8.com/external-phatplus-lineal-phatplus/64/000000/external-up-arrow-essential-phatplus-lineal-phatplus.png';
  }

  return (
    <div
      className={classnames(styles.container, {
        [styles.isuser]: isUser,
      })}
    >
      <div className={styles.h2}>
        <h2>{rank}</h2>
      </div>
      <div className={classdailydif}>
        <img
          className={styles.img}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          src={`https://countryflagsapi.com/png/${country}`}
          alt="Breaking Borders Logo"
        />
        <div className={styles.namescore}>
          <h1>{username}</h1>
          <h2>{weeklymoney}</h2>
        </div>
        <div className={styles.dailydif}>
          <img
            className={styles.rankimg}
            // eslint-disable-next-line react/jsx-curly-brace-presence
            src={imagelink}
            alt="rank"
          />
          <h3 className={styles.rankdiff}>{dailydif}</h3>
        </div>
      </div>
    </div>
  );
}
Usersmall.defaultProps = {
  weeklymoney: 0,
};
Usersmall.propTypes = {
  isUser: PropTypes.bool.isRequired,
  dailydif: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  weeklymoney: PropTypes.number,
};
export default Usersmall;
