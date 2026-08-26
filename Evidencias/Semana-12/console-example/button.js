// button.js
// Componente independiente y reutilizable.
// No sabe nada de "productos": solo recibe datos (label, onClick)
// y hace su trabajo. Solo "exporta" (expone) lo necesario con
// module.exports — el resto queda encapsulado dentro del archivo.

function Button({ label, onClick }) {
  return {
    render: () => `[ ${label} ]`,
    click: () => onClick(),
  };
}

module.exports = { Button };
