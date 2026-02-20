import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-items-center p-8 pb-5 gap-5 sm:p-20 sm:pb-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Contact Manager!</h1>
        <p className="text-lg text-gray-600 mt-2">
          Manage your contacts efficiently and effortlessly
        </p>
      </div>

      <Image
        src="/contact.jpg"
        alt="Contact Manager"
        width={300}
        height={300}
        className="mt-6 rounded-lg shadow-lg"
      />
      <div className="text-center">
        <p className="text-lg text-gray-600 mt-2">
          Start managing your contacts today!
        </p>
      </div>
    </div>
  );
}
