import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/Contact";

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
            <div className=" flex items-center self-center gap-3">
              <Link
                href={`/contact/${contact.id}/edit`}
                className="flex items-center gap-1 p-2 rounded-md bg-blue-50 text-blue-600 
             hover:bg-blue-600 hover:text-white 
             transition-all duration-200 ease-in-out
             shadow-sm hover:shadow-md"
              >
                <FiEdit size={18} />
                <span>Edit</span>
              </Link>
              <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
