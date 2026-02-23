"use client";
import React, { use, useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  contact?: ContactType;
  action: (prevState: any, formData: FormData) => Promise<any>;
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
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={contact?.name || ""}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={contact?.email || ""}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error}</div>
      )}
      <button
        type="submit"
        className=" mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
