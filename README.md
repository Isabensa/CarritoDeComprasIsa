<h1 align="center">🛒 Carrito de Compras Isa</h1>

<p align="center">
  <b>Proyecto desarrollado con React + Vite + Tailwind CSS</b><br/>
  Implementa Context API, animaciones con Framer Motion y notificaciones visuales con React Toastify.
</p>



## 📸 Vista previa

<p align="center">
  <img src="./public/vistaprevia1.png" width="85%" alt="Vista previa del proyecto"/>
  <br/><br/>
  <img src="./public/vistaprevia2.png" width="85%" alt="Vista previa modo oscuro"/>
</p>
--
## 🌐 Demo en línea
🔗 [carritodecomprasisa.netlify.app](https://carritodecomprasisa.netlify.app)

---

## 🚀 Tecnologías utilizadas

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-FF8800?style=for-the-badge&logo=react&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-6D28D9?style=for-the-badge&logo=react&logoColor=white)

</div>

---

## 💡 Funcionalidades principales

✅ Agregar, eliminar y modificar cantidad de productos.  
✅ Vaciar carrito con confirmación visual (`toast`).  
✅ Cálculo dinámico de descuentos y envío.  
✅ Modal animado con **Framer Motion**.  
✅ Persistencia con **LocalStorage**.  
✅ Notificaciones de acción con **React Toastify**.  
✅ Modo claro/oscuro mediante **ThemeContext**.  
✅ Diseño moderno y responsive.

---

## 🧮 Lógica destacada

El carrito calcula automáticamente descuentos y envío:

```js
const shipping = totalPrice > 50000 ? 0 : 5000;
const discount = totalItems >= 3 ? totalPrice * 0.1 : 0;
const finalTotal = totalPrice - discount + shipping;
🔹 “Envío gratis a partir de $50.000”
🔹 “Descuento del 10% al comprar 3 o más productos”

⚙️ Instalación y ejecución
bash
Copiar código
# Clonar el repositorio
git clone https://github.com/Isabensa/CarritoDeComprasIsa.git

# Instalar dependencias
npm install

# Ejecutar el entorno local
npm run dev
Accedé en tu navegador a 👉 http://localhost:5173

🧠 Estructura del proyecto
arduino
Copiar código
CarritoDeComprasIsa/
│
├── public/
│   ├── images/
│   ├── vistaprevia1.png
│   └── vistaprevia2.png
│
├── src/
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
└── vite.config.js
🌟 Créditos
👩‍💻 Isabel Bensadón - Desarrolladora Fullstack MERN · Educadora Tecnológica
