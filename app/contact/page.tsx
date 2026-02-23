import React from "react";
import { getContacts } from "../api/contact";
import { getSession } from "../_lib/session";
import ContactList from "../_components/ContactList";
import Link from "next/link";

export default async function ContactPage() {
  const user = await getSession();
  if (!user) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-slate-600">
          Please{" "}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            login
          </Link>{" "}
          to view contacts.
        </p>
      </div>
    );
  }

  const contacts = await getContacts(user.id);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">No contacts yet</h2>
        <p className="mt-2 text-slate-600">Start by adding your first contact.</p>
        <Link
          href="/contact/new"
          className="mt-5 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add Contact
        </Link>
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Your Contacts</h1>
          <p className="mt-1 text-sm text-slate-500">
            {contacts.length} {contacts.length === 1 ? "contact" : "contacts"} found
          </p>
        </div>
        <Link
          href="/contact/new"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add Contact
        </Link>
      </div>
      <ContactList contacts={contacts} />
    </section>
  );
}
