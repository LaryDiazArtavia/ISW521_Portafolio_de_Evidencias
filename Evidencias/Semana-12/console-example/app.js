// app.js
// Punto de entrada: combina varios ProductCard para armar
// el catálogo completo. Solo conoce la interfaz de ProductCard,
// nunca su interior (ni el de Button, dos niveles más abajo).

const { ProductCard } = require("./productCard");

const products = [
  { id: 1, name: "Teclado mecánico", price: 45 },
  { id: 2, name: "Mouse inalámbrico", price: 25 },
  { id: 3, name: "Monitor 24''", price: 180 },
];

function App() {
  console.log("===== CATÁLOGO =====");

  const cards = products.map((p) =>
    ProductCard({
      name: p.name,
      price: p.price,
      onAddToCart: () => console.log(`>> ${p.name} agregado al carrito`),
    })
  );

  cards.forEach((card) => card.render());

  console.log("\n===== Simulando click en el primer producto =====");
  cards[0].addButton.click();
}

App();
