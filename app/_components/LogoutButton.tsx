"use client";
import React from "react";
import { LogoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await LogoutAction();
    } catch (error) {
      console.log("Logout failed:", error);
      router.push("/login");
      router.refresh();
    }
  };
  return (
    <button
      className="rounded-full bg-rose-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
