import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Guarda el carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Agregar producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Eliminar producto por ID
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // ✅ Actualizar cantidad
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, quantity) }
          : product
      )
    );
  };

  // ✅ Calcular totales
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );

  // ✅ Mostrar u ocultar modal
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // ✅ Valor global del contexto
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart, // 🔹 Necesario para limpiar el carrito desde CartModal
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
