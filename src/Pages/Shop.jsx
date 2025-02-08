import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Vase from "../assets/artvase.webp";
import CupPic from "../assets/cup1.webp";
import ShawlPic from "../assets/shawl.webp";
import PonchoPic from "../assets/poncho.webp";

const products = [
  { id: 1, name: "Celestial Crafted Poncho", price: 120, image: PonchoPic },
  { id: 2, name: "Prism Handcrafted Vase", price: 80, image: Vase },
  { id: 3, name: "Poise Ceramic Mug Set", price: 50, image: CupPic },
  { id: 4, name: "Ethereal Woolen Shawl", price: 90, image: ShawlPic },
];

export default function ShopPage() {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const cartRef = useRef(null);
  const notificationRef = useRef(null);
  const cartButtonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    // Flash notification
    setShowNotification(true);
    gsap.fromTo(
      notificationRef.current,
      { y: -30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
    setTimeout(() => setShowNotification(false), 1500);

    // Animate cart button bounce
    gsap.fromTo(
      cartButtonRef.current,
      { scale: 1 },
      { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
    );

    // Animate cart reveal
    gsap.fromTo(
      cartRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const totalBill = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      <h1 className="text-3xl font-bold text-center mt-12 mb-12">Shop</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card p-4 border rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105"
          >
            <img src={product.image} alt={product.name} className="rounded-lg w-full h-48 object-cover" />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Notification */}
      {showNotification && (
        <div
          ref={notificationRef}
          className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Item Added to Cart 🛒
        </div>
      )}

      {/* Cart Section */}
      <div
        ref={cartRef}
        className="mt-12 mb-12  p-4 bg-gray-100 rounded-lg shadow-lg transition-all"
      >
        <h2 className="text-xl font-bold">Cart</h2>
        {cart.length > 0 ? (
          <ul className="mt-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-1">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <div className="mt-4 flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${totalBill}</span>
        </div>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          🛒 Proceed to Checkout
        </button>
      </div>

      {/* Floating Cart Button */}
      <button
        ref={cartButtonRef}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-blue-700 transition"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        🛒 {cart.length}
      </button>
    </div>
  );
}
