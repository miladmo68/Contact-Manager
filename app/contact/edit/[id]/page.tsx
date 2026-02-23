import ContactForm from "@/app/_components/ContactForm";
import { UpdateContactAction } from "@/app/actions/Contact";
import { getContactById } from "@/app/api/contact";
import React, { use } from "react";

function EditContactPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const contact = use(getContactById(id));

  return (
    <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-1 text-2xl font-bold tracking-tight text-slate-900">
        Edit Contact
      </h1>
      <p className="mb-6 text-sm text-slate-500">
        Update contact details and save your changes.
      </p>
      <ContactForm action={UpdateContactAction} contact={contact} />
    </section>
  );
}

export default EditContactPage;
