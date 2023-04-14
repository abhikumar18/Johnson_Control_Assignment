import axios from "axios";
import React, { useState, useEffect } from "react";
import { COLUMNS } from './components/Column';
import Table from "./components/Table";
import "./App.css";
import  SortingTable  from './components/SortingTable';
import FilterTable from './components/FilterTable';

function App() {
  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */

  

  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
   axios.get("https://restcountries.com/v2/region/europe").then((res)=>{
    console.log(res.data);
      setData(res.data);
  })
  }, []);

  return (
    <>
      <h3>Countries</h3>
      {/* <Table columns={COLUMNS} data={data} /> */}
      <SortingTable columns={COLUMNS} data={data} />
      {/* <FilterTable  /> */}
    </>
  );
}
export default App;