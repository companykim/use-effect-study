import './App.css';
import React, { useState, useEffect, useMemo } from 'react';

const peaks = [{ name: "kim mount", elev: 55 }, { name: "kim pong", elev: 50099 }];

function List({ data = [], itemRenderMethod = {}, empty }) {
  if (!data || data.length == 0)
    return empty;
  return (<>
    {data.map((item, idx) => (<li key={idx}>{itemRenderMethod(item)}</li>))}
  </>);
}

function App() {
  return (<List data={peaks}
    empty={<p>this list is empty!</p>}
    itemRenderMethod={item => (
        <>
          {item.name} - {item.elev} 높이입니다
        </>
      )}
  />);
}

export default App;
