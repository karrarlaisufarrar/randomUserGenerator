import React from "react";
import './body.css'

const Body = ({picture, name, gender, dob, phone, email, location, getData} ) => {
    return(
        <>
        <div className="cardWrapper">
            <div className="intro">
                <img src={picture?.large}></img>
                <h1>{name?.first} {name?.last}</h1>
            </div>
            <p className="details">
               <h3>Name:</h3> 
                <span>{name?.first} {name?.last}</span>
               <h3>Gender:</h3>
                <span>{gender}</span>
               <h3>DOB:</h3>
                <span>{new Date(dob?.date).toLocaleDateString()}</span>
               <h3>Age:</h3>
                <span>{dob?.age}</span>
               <h3>Phone:</h3>
                <span>{phone}</span>
               <h3>Email:</h3>
                <span>{email}</span>
               <h3>Address:</h3> 
                <div className="address">
                 <span>{location?.street?.number} {location?.street?.name}</span>
                 <span>{location?.city} {location?.country}</span>
                 <span>{location?.postcode}</span>
                </div> 
            </p>
        </div>
        <button className="nextUser" onClick={getData}> NEXT USER </button>
        </>
    );
};

export default Body;