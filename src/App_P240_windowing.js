import './App.css';
import React, { useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";
import {FixedSizeList}  from "react-window";

const bigList = [...Array(5000)].map(()=>({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

function List({data=[], itemRenderMethod=f=>f, empty=<></>}) {
  if (!data || data.length == 0) 
    return empty;
  return (<>
    {data.map((item, idx)=> (<li key={idx}>{itemRenderMethod(item)}</li>))}
  </>);
}

function App() {
  const renderRow = ({index, style}) => (
    <div style={{...style, display: "flex"}}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} style={{margin: "5px"}}/>
      <p>
        {bigList[index].name} ::: {bigList[index].email}
      </p>
    </div>
  );
  return (<FixedSizeList height = {window.innerHeight - 100}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}>
        {renderRow}
  </FixedSizeList>);
}

export default App;
