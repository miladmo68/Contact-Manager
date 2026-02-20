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
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
