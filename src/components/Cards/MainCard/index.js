import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import classnames from 'classnames';

import { getTopHundred, getUserData } from '../../../service/httpService';

import TopHundred from '../../Leaderboard/TopHundred';
import UserList from '../../Leaderboard/UserList';
import Card from '../Card';
import Loader from '../../Loader';

import styles from './index.module.css';

const socket = io(`${process.env.REACT_APP_BACKEND_URL}`);

function MainCard() {
  const [userData, setUser] = useState({ user: {}, users: [] });
  const [theHundred, setTheHundred] = useState([]);
  const [userId, setId] = useState('');

  const getData = async (id) => {
    const response = await getTopHundred();
    if (id) {
      const userResponse = await getUserData(id);
      setUser(userResponse.data);
    }
    setTheHundred(response.data.users);
    socket.on('resetdata', (data) => {
      if (data < 101) {
        getData(id);
        return;
      }
      if (!userData) {
        return;
      }
      if (data < userData.user.rank + 3 && userData.user.rank - 4 < data) {
        getData(id);
      }
    });
  };
  useEffect(() => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    getData(id);
    setId(id);
  }, [window.location.pathname]);

  return (
    <>
      {theHundred.length < 1 ? (
        <Loader />
      ) : (
        <div className={styles.div}>
          <div
            className={classnames(styles.carddiv, {
              [styles.cardtophundred]: userId === '',
            })}
          >
            <Card justHundred={userId === ''}>
              <TopHundred userRank={0} users={theHundred} />
            </Card>
          </div>

          {userId !== '' ? (
            <UserList user={userData.user} userList={userData.users} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default MainCard;
