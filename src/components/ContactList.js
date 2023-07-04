import React,{useRef} from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);
    const inputEl=useRef("");

    const deleteContact = (id) => {
        props.getContactID(id);
    }

  

    const renderContactList = props.contact.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContact} />
        );
    })


    return (
        <div className="ui main">
            <div className="">
                <h3 style={{ marginTop: "4rem" }}>Contact List</h3>
                <Link to="/add">
                <button style={{ marginTop: "-3rem" }} className="small ui  button blue right floated ">Add Contacts</button>
                </Link>
            </div>
          
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}
export default ContactList;