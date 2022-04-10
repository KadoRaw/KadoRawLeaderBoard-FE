import React from 'react';
import PropTypes from 'prop-types';

import Usersmall from '../UserSmall';

import styles from './index.module.css';

function UserList({ user, userList }) {
  const list = [...userList];

  list.sort(function (a, b) {
    return a.rank - b.rank;
  });

  const components = list.map((o) => {
    return (
      <Usersmall
        isUser={user.rank === o.rank}
        key={o._id}
        username={o.username}
        country={o.country}
        rank={o.rank}
        weeklymoney={o.weeklyEarnedMoney}
        dailydif={o.dailyDif}
      />
    );
  });

  return <div className={styles.userlist}>{components}</div>;
}

UserList.propTypes = {
  user: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    weeklymoney: PropTypes.number,
    dailyDif: PropTypes.number.isRequired,
  }).isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      weeklymoney: PropTypes.number,
      dailyDif: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default UserList;
