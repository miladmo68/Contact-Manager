"use server";
import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact";

export const CreateContactAction = async (
  prevState: any,
  formData: FormData,
) => {};

export const UpdateContactAction = async (
  prevState: any,
  formData: FormData,
) => {};

export const deleteContactAction = async (
  prevState: any,
  formData: FormData,
) => {
  const id = formData.get("id") as string;

  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error deleting contact:", error);
    return { error: "Failed to delete contact. Please try again." };
  }
};
