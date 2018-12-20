import C from '../actions/constants';



export const tmv3 = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_TMV3_ALL:
      return Object.assign({},state,
      {
        tmv3files:action.payload
      });
      break;
    case C.APPLY_TMV3_FILTER:
      let  tempstate = state.tmv3files; let newstate=[];
        for(var i = 0; i < action.payload.length; i++) {
          let filtername = action.payload[i];
          newstate = tempstate.filter(item => item[filtername] == '1');
        }
        return Object.assign({},state,{
          tmv3filtered:newstate
        });
        break;
    case C.CLEAR_TMV3_FILTER:
      return Object.assign({},state,{
        tmv3filtered:null
      });
    default:
      return state;
  }
}



export const tmv3file = (state={},action)=>{
  if (action.type==C.FETCH_TMV3_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}


export const tmv3Filter = (state=[],action)=>{
    switch (action.type) {
      case C.ADD_FILTER_TMV3:
        return [
          ...state,
          action.payload
        ]
        break;
      case C.REMOVE_FILTER_TMV3:
        return state.filter(item => item!=action.payload)
        break;
      default:
        return state;
    }
}
