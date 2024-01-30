import React from "react";

const Card = ({name}) => {
    return (
        <div className="bg-light-green dib br3 ma2 pa3 tc grow">
            <img src="https://robohash.org/Rorywood?size=200x200" alt=""/>
            <div>
                <h2>{name}</h2>
                <p>description</p>
            </div>
        </div>
    );
};

export default Card