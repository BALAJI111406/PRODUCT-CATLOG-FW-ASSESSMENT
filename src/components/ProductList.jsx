import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    return (
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Shop the latest trends and find your perfect style</p>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600">No products found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
