"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";
import { UserType } from "../_types/user";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    redirect("/login");
  }

  try {
    const response = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    );
    const user: UserType | undefined = response.data[0];
    if (!user) {
      redirect("/login");
    }

    await setSession({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    console.error("Login error:", error);
    redirect("/login");
  }

  redirect("/contact");
};

export const registerAction = async (formData: FormData) => {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!name || !email || !password) {
    redirect("/register");
  }

  try {
    const existingResponse = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(email)}`,
    );
    if (existingResponse.data.length > 0) {
      redirect("/register");
    }

    const createResponse = await axios.post(`${API_URL}/users`, {
      id: crypto.randomUUID(),
      name,
      email,
      password,
    });
    const user = createResponse.data as UserType & { password: string };

    await setSession({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    console.error("Register error:", error);
    redirect("/register");
  }

  redirect("/contact");
};

export const LogoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
