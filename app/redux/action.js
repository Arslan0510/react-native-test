import {LOGIN} from './constants';

export const login = (email, password) => {
  const action = {
    type: LOGIN,
    email,
    password,
  };
  console.log('action', action);
  return action;
};
