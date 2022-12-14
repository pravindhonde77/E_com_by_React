import * as types from "./actionTypes";

export const loginRequest = (params) => (dispatch) => {
  return dispatch({ type: types.LOGIN_REQUEST, payload: params });
};
export const signUpRequest = (params) => (dispatch) => {
  // console.log(params);
 return dispatch({ type: types.SIGNUP_REQUEST, payload: params });
};


export const logOut = (dispatch)=>{
  return dispatch({type: types.LOGOUT})
}