import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FiHome } from 'react-icons/fi';
import './UserCard.css';

let UserCard = (props) => {
  let getInfo = (id, e) => {
    let infoCard = document.getElementById(id);
    if (infoCard.style.visibility == 'hidden') {
      infoCard.style.visibility = 'visible';
    } else {
      infoCard.style.visibility = 'hidden';
    }
    if (e.innerText == 'SHOW DETAILS') {
      e.innerText = 'HIDE DETAILS';
    } else {
      e.innerText = 'SHOW DETAILS';
    }
  };

  return (
    <div className='user-card'>
      <li key={props.key}>
        <div className='card'>
          <div className='name'>
            {props.user.name.first} {props.user.name.last}
          </div>
          <img src={props.user.picture.large} class='img'></img>
          <button
            className='button'
            onClick={(e) => {
              getInfo(props.id, e.target);
            }}
          >
            SHOW DETAILS
          </button>
        </div>
        <div id={props.id} className='info'>
          <div>
            <BsPhone /> {'- ' + props.user.cell}{' '}
          </div>
          <div>
            <HiOutlineMail /> {'- ' + props.user.email}
          </div>
          <div>
            <FiHome />
            {' - ' + props.user.location.street.number}
            {' ' + props.user.location.street.name} <br />
            {' ' + props.user.location.city}
            {', ' + props.user.location.state} <br />
            {' ' + props.user.location.country} <br />
            {' ' + props.user.location.postcode}
          </div>
        </div>
      </li>
    </div>
  );
};

export default UserCard;
