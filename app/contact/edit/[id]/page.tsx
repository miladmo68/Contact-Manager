import ContactForm from "@/app/_components/ContactForm";
import { UpdateContactAction } from "@/app/actions/Contact";
import { getContactById } from "@/app/api/contact";
import React from "react";

async function EditContactPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const contact = await getContactById(id);
  return (
    <div className="p-6 max-w-md bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Contact</h1>
      <ContactForm action={UpdateContactAction} contact={contact} />
    </div>
  );
}

export default EditContactPage;
