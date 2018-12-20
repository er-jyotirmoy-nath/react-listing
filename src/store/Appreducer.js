import C from '../actions/constants';
import {combineReducers} from 'redux';

import {tmv3,tmv3file,tmv3Filter} from './tmv3Reducer';
import {ciasfiles,ciasfile} from './ciasReducer';
import {pdcertall,pdcertfile} from './pdcertreducer';
import {dtcfiles,dtcfile} from './dtcreducer';
import { login} from './Loginreducer';
export const tmv2 = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_TMV2_ALL:
      return action.payload;
      break;
    default:
    return state;
  }
}

export const tmv2file = (state={},action)=>{
  if (action.type==C.FETCH_TMV2_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}




export const error = (state=[],action)=>{
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
      break;
    case C.CLEAR_ERROR:
      return [];
      break;
    default:
    return state;

  }
}

export const savestatus = (state='',action)=>{
  switch (action.type) {
    case C.ADD_SAVE_STATUS:
      return action.payload;
      break;
    case C.CLEAR_STATUS:
      return '';
      break;
    default:
    return state;

  }
}

export default combineReducers({
  tmv2all:combineReducers({
    tmv2,
    tmv2file
  }),
  tmv3all:combineReducers({
    tmv3,
    tmv3file,
    tmv3Filter
  }),
  ciasall:combineReducers({
    ciasfiles,
    ciasfile
  }),
  dtcall:combineReducers({
    dtcfiles,
    dtcfile
  }),
  pdcertall:combineReducers({
    pdcertall,
    pdcertfile
  }),
  error,
  savestatus,
  login
})
