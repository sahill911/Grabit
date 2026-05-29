export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login to GrabIt
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter email"
            className="border p-3 rounded-md"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="border p-3 rounded-md"
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md hover:bg-gray-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}
