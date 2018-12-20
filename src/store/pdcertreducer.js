import C from '../actions/constants';

export const pdcertall = (state=[],action)=>{
  if (action.type == C.FETCH_PDCERT_ALL) {
    return  action.payload;
  }
  else{
    return state;
  }
}



export const pdcertfile = (state={},action)=>{
  if (action.type==C.FETCH_PDCERT_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}
