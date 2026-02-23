"use client";

import ContactForm from "@/app/_components/ContactForm";
import { CreateContactAction } from "@/app/actions/Contact";
import React from "react";

export default function NewContactPage() {
  return (
    <div className="p-6 max-w-md bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Contact</h1>
      <ContactForm action={CreateContactAction} />
    </div>
  );
}
