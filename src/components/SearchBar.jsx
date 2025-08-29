export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative max-w-xl">
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 pl-10 pr-12 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}
