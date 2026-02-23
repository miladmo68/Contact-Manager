import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm">
            CM
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Contact Manager
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          {session ? (
            <>
              <Link
                href="/contact"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
              >
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
