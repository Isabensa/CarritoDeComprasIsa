import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 2500000, image: "/images/laptop.jpg" },
  { id: 2, name: "Auriculares", price: 15000, image: "/images/audifonos.jpg" },
  { id: 3, name: "Mouse", price: 8900, image: "/images/mouse.jpg" },
  { id: 4, name: "PC Gamer", price: 3500000, image: "/images/pc.jpg" },
  { id: 5, name: "Samsung Galaxy", price: 800000, image: "/images/samsung.jpg" },
  { id: 6, name: "Teclado RGB", price: 22000, image: "/images/teclado.jpg" },
];

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-5">
      {/* Contenedor horizontal del carrito + título */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {/* Carrito animado */}
        <motion.img
          src="/images/iconocarrito.jpg"
          alt="Carrito animado"
          className="w-12 h-12 rounded-lg"
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Título */}
       <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
         Lista de Productos
       </h2>
      </div>

      {/* Grid de productos */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
