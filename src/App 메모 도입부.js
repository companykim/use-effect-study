import './App.css';
import React, { useState, useEffect } from 'react';

const useAnyKeyToRender = () => {
  const [_, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);

};

function WordCount ({children = ""}) {
  // 랜더링 강제화
  useAnyKeyToRender();
  const words = children.split(":");

  useEffect(() => {
    //반복적으로 구동되는군 노리는 효과가 아님...
    console.log(`refresh render`);
  }, [words]);

  return (
    <>
      <p>children</p>
      <p><strong>{words.length} : 단어들</strong></p>
    </>
  );
}

function App() {
  return (
    <WordCount>
      Favorite phrase
    </WordCount>
  );
}
// 기억해 놓은. cache 성능향상.
export default App;
