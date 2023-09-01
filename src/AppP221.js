import './App.css';
import React, {useState, useEffect} from 'react';

const useAnyKeyToRender = () => {
  const [_, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);

};

function WordCount ({children = ""}) { 
}

async function requestGithubUser(loginId) {
  try {
    const response = await fetch(`https://api.github.com/users/${loginId}`);
    const userData = await response.json();
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
}
function App() {
  requestGithubUser("companykim");
  return (
    <WordCount>
      Favorite phrase
    </WordCount>
  );
}

export default App;
