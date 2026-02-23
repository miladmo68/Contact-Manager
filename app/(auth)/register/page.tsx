import RegisterForm from "@/app/_components/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Register</h1>
        <p className="mt-2 text-sm text-slate-500">Create your Contact Manager account</p>
      </div>
      <RegisterForm />
      <p className="mt-5 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Login
        </Link>
      </p>
    </section>
  );
};

export default RegisterPage;
