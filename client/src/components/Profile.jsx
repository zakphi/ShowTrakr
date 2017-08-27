import React from 'react';
import { Link } from 'react-router-dom'

const Profile = (props) => {
  if(props.usersShows) {
    return (
      <div className="home">
        <h1 className="pageTitle">{localStorage.getItem('username')}'s Profile</h1>
           <div className="allSched">
            <h2 className="pageHeading">Your TV-Schedule</h2>
            {props.usersShows.map(show => {
              return (
                <div className='schedule'>
                  <div className='schedData'>
                    <h3 className='schedHead'>Show</h3>
                      <p>{show.title}</p>
                  </div>
                  <div className='schedData'>
                    <h3 className='schedHead'>Airs on</h3>
                     <p>{show.sched_day}</p>
                  </div>
                  <div className='schedData'>
                    <h3 className='schedHead'>Airs at</h3>
                     <p>{show.sched_time}</p>
                  </div>
                  <div className='schedData'>
                    <h3 className='schedHead'>Network</h3>
                     <p>{show.tv_network}</p>
                  </div>
                  <div className='schedData'>
                    <h3 className='schedHead'>Web Channel</h3>
                     <p>{show.web_channel}</p>
                  </div>
                </div>
                )
              })}
          </div>
          <div className="popularShows">
           <h2 className="pageHeading">Favorites</h2>
            {props.usersShows.map(show => {
              return (
                <div className='show'>
                <Link to='/show'>
                 <img onClick={() =>
                   props.getFavData(show)}
                   key={show.id}
                   src={show.image_url}
                   alt={show.title}
                   id={show.id}
                 />
                </Link>
                </div>
                )
              })}
        </div>
      </div>
    )
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Profile;
