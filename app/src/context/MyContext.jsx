import { React, useState, useEffect, createContext } from 'react';
// import getData from '../api/getData';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  
  const [editStudent, setEditStudent] = useState(false);

 

  return (
  <MyContext.Provider value={{editStudent, setEditStudent}}>{children}</MyContext.Provider>
  )
};
