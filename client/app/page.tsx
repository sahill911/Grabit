import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">

      <h1 className="text-4xl font-bold">
        Welcome to GrabIt 🚀
      </h1>

      <Link href="/login">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Go to Login
        </button>
      </Link>

    </div>
  );
}