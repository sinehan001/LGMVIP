import React from "react";
import "./users.css";
export default function Cards(props)
{
    return (
        <>
        <p className="content">USERS</p>
        {props.userData.map( (user) => {
            return (
                <div className="container-mg">
                    <br />
                    <div className="userCard">
                        <a href={user.avatar} rel="noopener noreferrer" target="_blank">
                            <img src={user.avatar} className="imgUser" alt="Profile" />
                        </a>
                        <div className="userCard-body">
                            <h3>
                                {user.first_name} {user.last_name}
                            </h3>
                            <p>{user.email}</p>
                            <br />
                        </div>
                    </div>
                </div>
            );
        })}
        </>
    );
}