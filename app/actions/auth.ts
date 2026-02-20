"use server";

import axios from "axios";
import { redirect } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`,
    );
    const user = response.data[0];
    if (!user) throw new Error("Invalid credentials");
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed to Login.");
  }

  redirect("/contact");
};

export const Logout = async () => {
  redirect("/login");
};
