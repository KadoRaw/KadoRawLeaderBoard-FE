import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';

import styles from './index.module.css';

function TopHundred({ users, userRank }) {
  const userList = [...users];
  userList.sort((a, b) => {
    return a.rank - b.rank;
  });

  const components = userList.map((o) => {
    return (
      <User
        isUser={userRank === o.rank}
        key={o._id}
        username={o.username}
        country={o.country}
        rank={o.rank}
        weeklymoney={o.weeklyEarnedMoney}
        dailydif={o.dailyDif}
      />
    );
  });

  return <ul className={styles.ul}>{components}</ul>;
}

TopHundred.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      weeklymoney: PropTypes.number,
      dailyDif: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  userRank: PropTypes.number.isRequired,
};

export default TopHundred;
