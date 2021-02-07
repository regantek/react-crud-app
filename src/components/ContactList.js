import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      key={contact.id}
      clickHandler={deleteContactHandler}
    ></ContactCard>
  ));
  return (
    <div className="ui celled list">
      {/* <h2>Contact List</h2> */}
      {renderContactList}
    </div>
  );
};

export default ContactList;
