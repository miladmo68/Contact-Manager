"use client";

import ContactForm from "@/app/_components/ContactForm";
import { CreateContactAction } from "@/app/actions/Contact";
import React from "react";

export default function NewContactPage() {
  return (
    <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-1 text-2xl font-bold tracking-tight text-slate-900">
        Add New Contact
      </h1>
      <p className="mb-6 text-sm text-slate-500">
        Fill the form below to create a new contact.
      </p>
      <ContactForm action={CreateContactAction} />
    </section>
  );
}
