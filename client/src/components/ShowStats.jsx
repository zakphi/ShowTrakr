import React from 'react';

const ShowStats = (props) => {
    return (
        <div className="show-stats">
            <img src={props.pic} alt={props.name} />
            <h1>{props.name}</h1>
            <h3>Genre: {props.genre}</h3>
            <h3>Schedule Day: {props.sched_day}</h3>
            <h3>Schedule Time: {props.sched_time}</h3>
            <h4>Summary: {props.summary}</h4>
        </div>
    )
}
export default ShowStats;
