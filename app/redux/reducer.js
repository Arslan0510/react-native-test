import {LOGIN} from './constants';

const credentials = action => {
  return {
    email: action.email,
    password: action.password,
  };
};

const credentialsData = (state = [], action) => {
  let data = null;
  switch (action.type) {
    case LOGIN:
      data = [...state, credentials(action)];
      return data;

    default:
      return state;
  }
};

export default credentialsData;
