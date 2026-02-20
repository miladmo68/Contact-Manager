import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
