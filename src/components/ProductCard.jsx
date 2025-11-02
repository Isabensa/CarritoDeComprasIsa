import PropTypes from "prop-types";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
    >
      <div className="w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {product.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mt-1">
          ${product.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl hover:opacity-90 transition-all transform hover:scale-105"
        >
          + Agregar al Carrito
        </button>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
