import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
const loadJSON = (key) =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
  
//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
function GithubUser({ loginId }) {
  const [userData, setUserData] = useState(loadJSON(`user:${loginId}`));
  useEffect(() => {
    //null이면 할일이 없군
    if (!loginId) return;
    fetch(`https://api.github.com/users/${loginId}`, {
      method: "Get",
      headers: { Authorization: `Bearer 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` }
    }).then(response => response.json()).then(setUserData)
      .catch(console.error);
  }, [loginId]);

  useEffect(() => {
    if (!userData) return;
    console.log(`UserData 저장 준비 중!!!`);
    if (userData.login === loginId) {
      console.log(`UserData 저장되어 있거덩!!!`);
      return;
    }
    console.log(`UserData 저장 한다...`);
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
    <GithubUser loginId="ivarbae" />
  );
}
//기억해 놓은. cache. 성능향상.
export default App;
