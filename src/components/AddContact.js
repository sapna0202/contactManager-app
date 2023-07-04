import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All The Fields Are Mandatory !");
            return;
        }

        props.addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate('/');
    };

    return (
        <div className="ui main center">
            <h2>Add Contact</h2>
            <Link to="/">
                <button style={{ marginTop: "-3rem" }} className="small ui  button blue right floated ">Contact List</button>
            </Link>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;
