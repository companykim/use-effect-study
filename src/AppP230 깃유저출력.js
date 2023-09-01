import './App.css';
import React, { useState, useEffect } from 'react';
const loadJSON = (key) =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => 
  localStorage.setItem(key, JSON.stringify(data));
    
// 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
function GithubUser({loginId}) {
  const [savedUserData] = useState(loadJSON(`user:${loginId}`));
  const [userData, setUserData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // null이면 할일이 없군
    if (!loginId) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${loginId}`, {
      method:"Get",
      headers: { Authorization: `Bearer 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` }
    }).then(response => response.json()).then(setUserData).then(setLoading(false))
      .catch(setError);
  }, [loginId]);

  useEffect(() => {
    if (!userData) return;
    console.log(`UserData 저장 준비 중!!!`);
    if (savedUserData && savedUserData.updated_at === userData.updated_at) {
      console.log(`UserData 저장되어있거든!`);
      return;
    }
    console.log(`UserData 저장 한다...`);
    const {login, name, avatar_url, html_url, updated_at} = userData;
    const savingDataImage = {reqID: loginId, login, name, avatar_url, html_url, updated_at};
    console.log(`${savingDataImage} 이렇게 저장한다.`);
    saveJSON(`user: ${loginId}`, savingDataImage);
  }, [userData]);

  if (loading) return <p>loading....</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (userData) {
    return <div>
    <img src={userData.avatar_url} alt={userData.login} style={{width: 200}}/>
    <div>
      <h1>{userData.login}</h1>
      {userData.name && <p>{userData.name}</p>}
      {userData.location && <p>{userData.location}</p>}
    </div>
  </div>;
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
