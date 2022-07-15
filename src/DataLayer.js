import React, {
  createContext,
  useContext,
  useReducer,
  userReducer,
} from "react";

export const DataLayerContext = createContext(); // this is the actual data layer

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
