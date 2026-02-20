"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";
import { UserType } from "../_types/user";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`,
    );
    const user: UserType | undefined = response.data[0];
    if (!user) throw new Error("Invalid credentials");

    await setSession({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed to Login.");
  }

  redirect("/contact");
};

export const LogoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
