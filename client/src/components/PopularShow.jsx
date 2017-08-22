import React from 'react'
import { Link } from 'react-router-dom'

const PopularShow = (props) => {
  return(
    <div className='show'>
      <Link to='/show'>
        <img onClick={() => props.getShowData(props.show.name)} src={props.show.image_thumbnail_path} alt={props.show.name} />
      </Link>
    </div>
  )
}

export default PopularShow