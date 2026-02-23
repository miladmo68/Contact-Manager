import Image from "next/image";
import Link from "next/link";
import { getSession } from "./_lib/session";

export default async function Home() {
  const session = await getSession();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 shadow-sm sm:p-10">
      <div className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Simple. Fast. Reliable.
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Keep Your Contacts Organized Without The Mess
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            A clean contact dashboard to add, edit, and manage your people in
            seconds.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={session ? "/contact" : "/login"}
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {session ? "Go To Contacts" : "Login To Start"}
            </Link>
            <Link
              href="/contact/new"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Add New Contact
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
          <Image
            src="/contact.jpg"
            alt="Contact Manager"
            width={900}
            height={600}
            className="h-auto w-full rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
