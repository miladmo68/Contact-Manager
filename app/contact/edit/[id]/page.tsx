import ContactForm from "@/app/_components/ContactForm";
import { UpdateContactAction } from "@/app/actions/Contact";
import { getContactById } from "@/app/api/contact";
import React, { use } from "react";

function EditContactPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const contact = use(getContactById(id));
  console.log("Contact data:", contact);
  return (
    <div className="p-6 max-w-md bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Contact</h1>
      <ContactForm action={UpdateContactAction} contact={contact} />
    </div>
  );
}

export default EditContactPage;
