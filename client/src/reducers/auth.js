import { AUTHENICATION_ERROR } from '../actions';

export default (auth = {}, action) => {
  switch (action.type) {
    case AUTHENICATION_ERROR:
      return { ...auth, error: action.payload };
    default:
      return auth;
  }
};
