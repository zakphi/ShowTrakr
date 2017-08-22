import React from 'react'

const PopularShow = (props) => {
  return(
    <div className='show'>
      <img onClick={() => props.getShowData(props.show.name)} src={props.show.image_thumbnail_path} alt={props.show.name} />
    </div>
  )
}

export default PopularShow