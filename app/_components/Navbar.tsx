import Link from "next/link";
import React from "react";

function Navbar() {
  const session = true;
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
                className="text-gray-600 hover:text-gray-800 mr-8"
              >
                Contacts
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
