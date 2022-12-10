import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE:any = {
    user: JSON.parse(localStorage.getItem("user")!) ||null,
    loading: false,
  error: null,
};
type stateobj={
    user:any,
    loading:boolean,
    error:any
}
type actionObj ={
    type:string,
    payload:stateobj
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state:any, action:actionObj) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};