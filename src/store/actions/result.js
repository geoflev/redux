import * as actionTypes from "./actionTypes";

//ASYNC ACTION CREATION START
// only able due to thunk
// async actions never make it to the store
// only sync!
export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

//fake server call
export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

//ASYNC ACTION CREATION END

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
