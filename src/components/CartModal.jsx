import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartModal = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart, totalPrice, setCart } =
    useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCartOpen) return null;

  // ✅ Cálculos adicionales: descuento y envío
  const totalItems = cart.reduce((total, p) => total + (p.quantity || 0), 0);
  const shipping = totalPrice > 50000 ? 0 : 5000;
  const discount = totalItems >= 3 ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount + shipping;

  // ✅ Vaciar carrito
  const handleClearCart = () => {
    if (cart.length === 0) return toast.info("El carrito ya está vacío.");
    setCart([]);
    localStorage.removeItem("cart");
    toast.error("🗑️ Carrito vaciado correctamente.");
  };

  // ✅ Finalizar compra (corregido)
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Agregá productos antes de comprar.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setCart([]); // Vacía el carrito
      localStorage.removeItem("cart");
      toast.success("🎉 ¡Gracias por tu compra!");
      setIsProcessing(false); // 🔹 Se restablece el estado
      toggleCart(); // 🔹 Cierra el modal
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-[#1f2937] text-gray-800 dark:text-gray-200 p-8 rounded-2xl shadow-2xl w-[90%] sm:w-[500px] max-w-xl"
          >
            {/* Encabezado */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">🛍️ Mi Carrito</h2>
              <button
                className="text-gray-400 hover:text-red-500 text-xl"
                onClick={toggleCart}
              >
                ✖
              </button>
            </div>

            {/* Lista de productos */}
            <ul className="space-y-4 max-h-[300px] overflow-y-auto">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition"
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.error("❌ Producto eliminado del carrito.");
                      }}
                    >
                      Quitar
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-center text-lg">El carrito está vacío</p>
              )}
            </ul>

            {/* Cálculos y totales */}
            {cart.length > 0 && (
              <div className="mt-6 space-y-2 text-center text-lg">
                <p className="text-green-600 dark:text-green-400 font-medium">
                  {shipping === 0
                    ? "🟢 Envío gratis a partir de $50.000"
                    : "💸 Envío: $5.000"}
                </p>
                {discount > 0 && (
                  <p className="text-blue-500 font-medium">
                    🎁 Descuento del 10% aplicado
                  </p>
                )}
                <p className="font-semibold text-xl mt-2">
                  Total Final: ${finalTotal.toFixed(2)}
                </p>
              </div>
            )}

            {/* Botones de acción */}
            {cart.length > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
                <button
                  onClick={handleClearCart}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-md transition"
                >
                  🗑️ Vaciar Carrito
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className={`w-full sm:w-auto ${
                    isProcessing
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-6 py-2 rounded-xl shadow-md transition`}
                >
                  {isProcessing ? "Procesando..." : "💳 Finalizar Compra"}
                </button>
              </div>
            )}
          </motion.div>
          <ToastContainer position="bottom-right" autoClose={2500} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
