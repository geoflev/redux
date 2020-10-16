import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        //what we actually do here is
        // spread the old state and replace the counter
        // without the ...state we would replace all the old state with
        //just counter, so everything else would be lost
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
    //to clean up code use above
    // return {
    //   ...state,
    //   counter: state.counter - action.val,
    // };
  }
  return state;
};

export default reducer;
