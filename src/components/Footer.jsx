const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-gray-300 text-center py-5 mt-12">
      <p className="text-sm tracking-wide">
        {new Date().getFullYear()} Carrito de Compras de Isabel
      </p>
      <div className="mt-2 flex justify-center gap-4 text-gray-400">
        <a href="https://github.com/Isabensa" target="_blank" rel="noreferrer" className="hover:text-white">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
