export default function CategoryFilter({ categories, selected, setSelected }) {
  return (
    <div className="flex flex-col gap-2">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
            selected === cat
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
