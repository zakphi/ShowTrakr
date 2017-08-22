import React from 'react';

const Show = props => {
    return (
        <li onClick={() => props.getShowData(props.url)}>
            {props.name}
        </li>
    );
};

export default Show;
