import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal"; 

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}> 
      <Header />
         
         
      <CartModal /> 
      <main className="max-w-6xl mx-auto p-5">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;