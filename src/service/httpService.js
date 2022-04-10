import axios from 'axios';

export const getTopHundred = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL_API}/leaderboard`
  );

  return response;
};

export const getUserData = async (id) => {
  const userResponse = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL_API}/leaderboard/user/${id}`
  );
  return userResponse;
};
