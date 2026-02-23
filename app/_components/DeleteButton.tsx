"use client";
import { useActionState } from "react";
import { ContactType } from "../_types/contact";
import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProps = {
  contact?: ContactType;
  action: (
    prevState: { success?: boolean; error?: string } | null,
    formData: FormData,
  ) => Promise<{ success?: boolean; error?: string }>;
};

const DeleteButton = ({ contact, action }: DeleteButtonProps) => {
  const [, formAction] = useActionState(action, null);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={contact?.id} />
      <button
        type="submit"
        className="flex items-center gap-1 p-2 rounded-md bg-red-50 text-red-600 
             hover:bg-red-600 hover:text-white 
             transition-all duration-200 ease-in-out
             shadow-sm hover:shadow-md"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact?"))
            e.preventDefault();
        }}
      >
        <FiTrash2 size={18} />
        <span>Delete</span>
      </button>
    </form>
  );
};

export default DeleteButton;
