import React from 'react'
import { Link } from 'react-router-dom'
import image from '../imgComingSoon.png'
const PopularShow = (props) => {
  return(
    <div className='show'>
      <Link to='/show'>
        <img onClick={() =>
          props.getShowData(props.show.name)}
          src={props.show.image_thumbnail_path === 'https://static.episodate.com' ? image : props.show.image_thumbnail_path}
          alt={props.show.name}
        />
      </Link>
    </div>
  )
}

export default PopularShow