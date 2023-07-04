import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  const local_Storage_key = "contacts";
  const [contacts, setContacts] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(local_Storage_key);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });





  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }])
  }

  const removeContact = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContact);
  }


  useEffect(() => {
    localStorage.setItem(local_Storage_key, JSON.stringify(contacts));
  }, [contacts]);



  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<ContactList contact={contacts} getContactID={removeContact}/>}/>
        <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
