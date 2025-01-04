export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h3 className="text-5xl font-bold tracking-tight">Link Shortner</h3>
          <p className="text-lg mt-4">Shorten your links with ease</p>
        </div>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Enter your link here"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
            Shorten
          </button>
        </div>
      </div>
    </>
  );
}
