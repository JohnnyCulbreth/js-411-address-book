import React, { useState } from 'react';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FiHome } from 'react-icons/fi';
import './UserCard.css';

function UserCard(props) {
  const [isHidden, setHide] = useState(true);

  return (
    <div className='user-card'>
      <li style={{ listStyle: 'none' }} key={props.key}>
        <div className='card'>
          <div className='name'>
            {props.firstName} {props.lastName}
          </div>
          <img
            src={props.picture}
            className='img'
            onClick={() => {
              isHidden ? setHide(false) : setHide(true);
            }}
          ></img>
        </div>
        {isHidden ? (
          <div></div>
        ) : (
          <div>
            <div>
              <BsPhone /> {'- ' + props.phone}{' '}
            </div>
            <div>
              <HiOutlineMail /> {'- ' + props.email}
            </div>
            <div>
              <FiHome />
              {' - ' + props.streetNumber}
              {' ' + props.streetName} <br />
              {' ' + props.city}
              {', ' + props.state} <br />
              {' ' + props.country} <br />
              {' ' + props.postcode}
            </div>
          </div>
        )}
      </li>
    </div>
  );
}

export default UserCard;
