import React from "react";
import { ContactType } from "../_types/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="border p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
            <div className=" flex items-center self-center gap-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
