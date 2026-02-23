import React from "react";
import { getContacts } from "../api/contact";
import { getSession } from "../_lib/session";
import ContactList from "../_components/ContactList";

export default async function ContactPage() {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        Please{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>{" "}
        to view contacts.
      </div>
    );
  }
  const contacts = await getContacts(user.id);
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a contact
        </a>{" "}
        to your contact list.
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Contacts</h1>
        <a
          href="/contact/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Contact
        </a>
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
}
