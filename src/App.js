import Home from './pages/Home';
import './styles/global.css';
import Context from './Context';
import Results from './pages/Results';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const[data,setData]=useState([]);
  const[searchTerm,setSearchTerm]=useState("")

  console.log(searchTerm)
  return (
    <Context.Provider value={{data,setData,searchTerm,setSearchTerm}}>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/results" element={<Results />}></Route>
  

</Routes>
</Context.Provider>
  );
}

export default App;
