# Aula Invertida

Ejemplo básico en **JavaScript con Node.js** que simula un catálogo de productos utilizando componentes reutilizables.

## Estructura

* `app.js`: punto de entrada de la aplicación y contiene los productos.
* `productCard.js`: representa una tarjeta de producto.
* `button.js`: componente reutilizable que representa un botón.

## Funcionamiento

`App` crea varias tarjetas de productos mediante `ProductCard`.

Cada `ProductCard` utiliza internamente un componente `Button` para simular la acción de **Agregar al carrito**.

El ejemplo demuestra:

* Uso de `require()` y `module.exports`.
* Separación de responsabilidades.
* Composición de componentes.
* Encapsulamiento.
* Reutilización de código.

## Ejecución

```bash
node app.js
```

Al ejecutarlo se muestra el catálogo en consola y se simula un clic en el botón del primer producto.
