import {GET_FARMERS} from '../constants/farmersConstants';

const farmersReducer = (state, action) => {
  switch (action.type) {
    case GET_FARMERS:
      return {
        ...state,
        farmers: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default farmersReducer;
