import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"

const UserDetail = (props) => {
    const { name, email } = props.match.params;

    return (
        <div className="main">
            <div className="ui centered card">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue ">Back</button>
                </Link>
            </div>
        </div>
    );
}

export default UserDetail;