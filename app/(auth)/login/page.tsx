import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-500">Welcome back to Contact Manager</p>
      </div>
      <LoginForm />
      <p className="mt-5 text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700">
          Register
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
