import React from "react";

const User_card = (props) => {
    console.log(props.data);

    return (
        <div className="User-card">
            <img className="img-card" src={props.data.picture.large}></img>
            <h3>{props.data.name.first} {props.data.name.last} </h3>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city} {props.data.location.country} </p>
            <p>{props.data.dob.date}</p>
        </div>
    );
};

export default User_card;