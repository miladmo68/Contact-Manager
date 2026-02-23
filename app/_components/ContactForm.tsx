"use client";
import React, { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  contact?: ContactType;
  action: (
    prevState: { success?: boolean; error?: string } | null,
    formData: FormData,
  ) => Promise<{ success?: boolean; error?: string }>;
};

const ContactForm = ({ contact, action }: ContactFormProps) => {
  const router = useRouter();

  const [state, formAction] = useActionState(action, null);

  useEffect(() => {
    if (state?.success) {
      // Handle success (e.g., show a success message or redirect)
      console.log("Contact saved successfully!");
      router.push("/contact");
    } else if (state?.error) {
      // Handle error (e.g., show an error message)
      console.error("Error saving contact:", state.error);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={contact?.id || ""} />
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={contact?.name || ""}
          className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={contact?.email || ""}
          className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Enter your email"
        />
      </div>
      {state?.error && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
          {state.error}
        </div>
      )}
      <button
        type="submit"
        className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
