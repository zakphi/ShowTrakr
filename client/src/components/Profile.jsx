import React from 'react';
import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className='show'>
      <Link to='/show'>
        {props.usersShows.map(show => {
          return <img onClick={() =>
            props.getShowData(show.title)}
            key={show.id}
            src={show.image_url}
            alt={show.title} />
        })}
      </Link>
    </div>
  )
}

export default Profile;