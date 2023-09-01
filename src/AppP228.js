import './App.css';
import React, { useState, useEffect } from 'react';
const loadJSON = (key) => 
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => 
  localStorage.setItem(key, JSON.stringify(data));
    
// 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
function GithubUser({loginId}) {
  const [userData, setUserData] = useState(loadJSON(`user:${loginId}`));
  useEffect(() => {
    // null이면 할일이 없군
    if (!loginId) return;
    fetch(`https://api.github.com/users/${loginId}`, {
      method:"Get",
      headers: { Authorization: `Bearer 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` }
    }).then(response => response.json()).then(setUserData)
      .catch(console.error);
  }, [loginId]);

  useEffect(() => {
    if (!userData) return;
    console.log(`UserData 저장 준비 중!!!`);
    if (userData.login === loginId) return;
    console.log(`UserData 저장되어있음...`);
    const {login, name, avatar_url, html_url} = userData;
    saveJSON(`user:${login}`, {login, name, avatar_url, html_url});
  }, [userData]);

  if (userData) {
    return <pre>{JSON.stringify(userData, null, 2)}</pre>;
  } else {
    return null;
  }
}

function App() {
  return (
    <GithubUser loginId="companykim" />
  );
}

// 기억해 놓은 cache. 성능향상.
export default App;
