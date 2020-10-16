import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        //concat creates another array and adds what we want to store
        //if we used push we would actually access and override on the original array
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // example how to delete
      //   const id = 2;
      //   const newArray = [...state.results];
      //   newArray.splice(id, 1);

      //filter creates a new array and accepts a function
      //return true for every index that isnt eq to id
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

export default reducer;
