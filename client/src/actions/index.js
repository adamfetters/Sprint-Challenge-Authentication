import axios from 'axios';

axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000/api';

export const USER_REGISTERED = 'USER_REGISTERED';
export const AUTHENICATION_ERROR = 'AUTHENICATION_ERROR';

export const authError = error => ({
  type: AUTHENICATION_ERROR,
  payload: error,
});

export const register = (username, password, confirmPassword, history) => dispatch => {
  if (password !== confirmPassword) {
    dispatch(authError('Passwords do not match'));
    return;
  }
  axios
    .post(`${ROOT_URL}/users`, { username, password })
    .then(() => {
      dispatch({
        type: USER_REGISTERED,
      });
      history.push('/signin');
    })
    .catch(() => {
      dispatch(authError('Failed to register user'));
    });
};
