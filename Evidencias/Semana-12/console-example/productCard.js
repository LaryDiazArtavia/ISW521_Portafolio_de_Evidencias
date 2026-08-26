// productCard.js
// Se compone de Button. Lo "importa" con require() y solo puede
// usar lo que Button decidió exportar — nunca su interior.

const { Button } = require("./button");

function ProductCard({ name, price, onAddToCart }) {
  const addButton = Button({
    label: "Agregar al carrito",
    onClick: onAddToCart,
  });

  return {
    render: () => {
      console.log(`\n--- ${name} ---`);
      console.log(`Precio: $${price}`);
      console.log(addButton.render());
    },
    addButton,
  };
}

module.exports = { ProductCard };
