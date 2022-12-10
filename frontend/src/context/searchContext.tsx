import { createContext, type Dispatch, useReducer } from "react";

const INITIAL_STATE : INITIAL_STATE_OBJ = {
  destination: '',
  checkinvalue: '',
  checkoutvalue: '',
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
  dispatch:  (() => undefined) as Dispatch<any>
};
type INITIAL_STATE_OBJ = {
  destination: string,
  checkinvalue:  string,
  checkoutvalue: string,
  options: {
    adult: number,
    children: number,
    room: number,
  },
  dispatch: Dispatch<any>,
};
type stateObj = {
  destination: string,
    checkinvalue: string,
    checkoutvalue: string,
    options: {
      adult: number,
      children: number,
      room: number,
    },
  };

type actionObj ={
  type:string,
  payload:stateObj
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state:stateObj, action:actionObj) => {
  console.log("inside search reducer");
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children } : any) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE );

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        checkinvalue: state.checkinvalue,
        checkoutvalue: state.checkoutvalue,
        options: state.options,
        dispatch,
        
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};


















