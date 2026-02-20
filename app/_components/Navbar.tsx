import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const session = false;
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className=" flex items-center space-x-4">
          {session ? (
            <>
              <Link
                href="/contacts"
                className=" hover:text-blue-600 mr-8 transition-colors duration-200"
              >
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-blue-800">
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-600 hover:text-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
