import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import ThemeButton from "./ThemeButton";
import { ShoppingCart } from "lucide-react";


const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { totalItems, toggleCart } = useContext(CartContext);

  return (
    <header className="w-full bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white py-4 px-6 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      <div className="flex items-center gap-3">
        <img
          src="/images/iconocarrito.jpg"
          alt="Carrito"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-semibold tracking-wide">Carrito de Compras</h1>
      </div>

      <div className="flex items-center gap-4 mt-3 sm:mt-0">
        <ThemeButton />
        <button
          onClick={toggleCart}
          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
        >
          🛍️ Ver Carrito ({totalItems})
        </button>
      </div>
    </header>
  );
};

export default Header;
