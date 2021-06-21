
import { combineReducers } from 'redux';

import { app } from '@/App/reducer';
import { main } from '@/pages/Main/reducer';

export default combineReducers({
  app,
  main
});