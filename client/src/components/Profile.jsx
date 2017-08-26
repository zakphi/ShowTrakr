import React from 'react';
import { Link } from 'react-router-dom'

const Profile = (props) => {
  if(props.usersShows) {
    return (
      <div className="home">
        <h1 className="pageTitle">{localStorage.getItem('username')}'s Profile</h1>
        <div className="popularShows">
          <Link to='/show'>
            {props.usersShows.map(show => {
              return <div className='show'>
                <img onClick={() =>
                  props.getFavData(show)}
                  key={show.id}
                  src={show.image_url}
                  alt={show.title}
                  id={show.id}
                />
              </div>
            })}
          </Link>
        </div>
      </div>
    )
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Profile;
