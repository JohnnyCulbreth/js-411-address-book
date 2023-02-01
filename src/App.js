import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import './index.css';

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
      <div className='app-header'>
        <h1>Address Book</h1>
        <h3>Click a User's picture to expand details</h3>
      </div>
      <ul>
        {userInfo.map((user, i) => {
          return (
            <UserCard
              key={i}
              firstName={user.name.first}
              lastName={user.name.last}
              picture={user.picture.large}
              phone={user.cell}
              email={user.email}
              streetNumber={user.location.street.number}
              streetName={user.location.street.name}
              city={user.location.city}
              state={user.location.state}
              country={user.location.country}
              postcode={user.location.postcode}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
