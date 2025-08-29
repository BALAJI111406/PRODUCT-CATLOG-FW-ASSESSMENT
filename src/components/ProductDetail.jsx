import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
  );
  
  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
        <Link to="/" className="text-black hover:underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/" className="text-gray-600 hover:text-black flex items-center gap-2 mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 object-contain"
              />
            </div>

            {/* Product Info */}
            <div>
              <span className="text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {product.title}
              </h1>
              <div className="mt-4 flex items-center">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
              
              <p className="mt-6 text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 border-r hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                
                <button className="w-full border border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
