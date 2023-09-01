import './App.css';
import React, { useState, useEffect } from 'react';

const peaks = [{name:"kim mount", elev:55}, {name:"kim pong", elev:50099}];

function List({data=[], itemRenderMethod={}, empty}) {
  console.log("step 2");
  if (!data || data.length == 0) 
    return empty;
  return (<>
    {data.map((item, idx)=> (<li key={idx}>{itemRenderMethod(item)}</li>))}
  </>);
}

function App() {
  console.log("step 1");
  return ( <List data={peaks}
    empty = {<p>this list is empty!</p>}
    itemRenderMethod = {
      item=>(
        <>
          {item.name} - {item.elev} 높이입니다
        </>
      )
    }
  />);
}

// 기억해 놓은 cache. 성능향상.
export default App;
