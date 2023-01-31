import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';

let App = () => {
  let [userInfo, setUserInfo] = useState([]);

  let fetchData = async () => {
    let userFetch = (await axios.get('https://randomuser.me/api?results=25'))
      .data.results;
    setUserInfo([...userFetch]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {userInfo.map((user, i) => {
          return <UserCard key={i} user={user} id={i} />;
        })}
      </ul>
    </div>
  );
};

export default App;
