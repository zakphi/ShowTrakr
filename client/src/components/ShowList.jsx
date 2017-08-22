import React from 'react';

import Show from './Show';

const ShowList = props => {
    return (
        <div className="show-list">
            <ul>
                {props.showList.map((show, index) => {
                    return (
                        <Show 
                            key={index}
                            name={show.name}
                            url={show.url}
                            getShowList={props.getShowData}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ShowList;