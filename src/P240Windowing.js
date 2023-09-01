import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { faker } from "@faker-js/faker";
import { FixedSizeList } from "react-window";

const bigList = [...Array(1000)].map(()=>({
  name:faker.person.firstName(),
  email:faker.internet.email(),
  avatar:faker.internet.avatar()
}));

function List({ data = [], itemRenderMethod = f=>f, empty = <></> }) {
  if (!data || data.length === 0)
    return empty;
  return (<>
    {data.map((item, idx) => (<li key={idx}>{itemRenderMethod(item)}</li>))}
  </>);
}



function P240Windowing() {
  const renderRow = ({ index, style }) => (
    <div style={{...style, display:"flex"}}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} style={{margin:"5px"}}/>
      <p>
      {bigList[index].name} ::: {bigList[index].email}
      </p>
    </div>
  );
    return (<FixedSizeList height={window.innerHeight}
      width = {window.innerWidth -20}
      itemCount={bigList.length}
      itemSize={40}>
        {renderRow}
    </FixedSizeList>);
  /*
  const itemRenderMethod = item => (
    <div style={{display:"flex"}}>
      <img src={item.avatar} alt={item.name} width={50}/>
      <p>
      {item.name} - {item.email}
      </p>
    </div>
  );

  return (<List data={bigList}
    empty={<p>this list is empty!</p>}
    itemRenderMethod={itemRenderMethod}
  />);
  */
}

export default P240Windowing;
