import React from "react";
import { getContacts } from "../api/contact";
import { getSession } from "../_lib/session";

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

  return <div>Contact Page</div>;
}
