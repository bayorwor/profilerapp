import {GET_TRAININGS} from '../constants/trainingsConstant';

const trainingsReducer = (state, action) => {
  switch (action.type) {
    case GET_TRAININGS:
      return {
        ...state,
        trainings: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default trainingsReducer;
