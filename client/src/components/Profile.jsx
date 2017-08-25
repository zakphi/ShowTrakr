import React from 'react';
import { Link } from 'react-router-dom'

const Profile = (props) => {
  if(props.usersShows) {
    return (
      <div className='show'>
        <Link to='/show'>
          {props.usersShows.map(show => {
            return <img onClick={() =>
              props.getFavData(show)}
              key={show.id}
              src={show.image_url}
              alt={show.title}
              id={show.id}
               />
          })}
        </Link>
      </div>
    )
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Profile;
