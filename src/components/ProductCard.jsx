export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-blue-500 text-xl mt-2">${product.price}</p>
      <button 
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={() => alert(`Added ${product.title} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}
