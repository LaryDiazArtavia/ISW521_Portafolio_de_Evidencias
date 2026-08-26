# Vite vs Webpack

## Investigación con demostración técnica en vivo

Este repositorio contiene una demostración técnica para comparar Vite y Webpack como herramientas de construcción para aplicaciones web modernas.

La misma aplicación fue desarrollada dos veces:

- Una versión utilizando Vite.
- Una versión utilizando Webpack.

El objetivo es comparar la configuración, el servidor de desarrollo, el procesamiento de archivos, la actualización durante el desarrollo y la generación del build de producción.

## Integrantes

- Lary Díaz Artavia
- Kristel Bravo Rivera
- Vladimir Ramírez López 

## Aplicación desarrollada

La aplicación se llama **Comparador de productos**.

Permite realizar las siguientes acciones:

- Agregar productos con su nombre y precio.
- Mostrar los productos registrados.
- Calcular el subtotal de la compra.
- Calcular un impuesto del 13 %.
- Calcular el total.
- Eliminar productos.
- Vaciar la lista.
- Validar que los datos ingresados sean correctos.
- Guardar los productos en el navegador mediante `localStorage`.

Las dos versiones utilizan la misma lógica, estructura HTML y estilos CSS. La principal diferencia se encuentra en la herramienta utilizada para ejecutar y construir el proyecto.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- npm
- Vite 8
- Webpack 5
- Webpack Dev Server
- HtmlWebpackPlugin
- css-loader
- style-loader

## Estructura del repositorio

```text
vite-vs-webpack/
│
├── vite-demo/
│   ├── public/
│   ├── src/
│   │   ├── calculator.js
│   │   ├── main.js
│   │   ├── style.css
│   │   ├── ui.js
│   │   └── validation.js
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── webpack-demo/
│   ├── src/
│   │   ├── calculator.js
│   │   ├── index.html
│   │   ├── main.js
│   │   ├── style.css
│   │   ├── ui.js
│   │   └── validation.js
│   ├── webpack.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md

```

## Requisitos

Para ejecutar los proyectos se necesita tener instalado:

- Node.js
- npm

Las versiones pueden comprobarse con:

```bash
node -v
npm -v
```

## Ejecutar la versión con Vite

Ingrese a la carpeta del proyecto:

```bash
cd vite-demo
```

Instale las dependencias:

```bash
npm install
```

Inicie el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:5173
```

Para detener el servidor, presione:

```text
Ctrl + C
```

Para generar el build de producción:

```bash
npm run build
```

Vite generará la carpeta:

```text
vite-demo/dist
```

## Ejecutar la versión con Webpack

Desde la carpeta principal del repositorio, ingrese a:

```bash
cd webpack-demo
```

Instale las dependencias:

```bash
npm install
```

Inicie el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:8080
```

Para detener el servidor, presione:

```text
Ctrl + C
```

Para generar el build de producción:

```bash
npm run build
```

Webpack generará la carpeta:

```text
webpack-demo/dist
```

## Diferencias demostradas

| Aspecto | Vite | Webpack |
|---------|------|---------|
| Punto de entrada | `index.html` | `src/main.js` |
| Configuración inicial | Mínima | Utiliza `webpack.config.js` |
| Procesamiento de CSS | Incluido directamente | Utiliza `css-loader` y `style-loader` |
| Generación del HTML | Forma parte del proyecto | Utiliza `HtmlWebpackPlugin` |
| Servidor de desarrollo | Servidor de Vite | Webpack Dev Server |
| Puerto habitual | 5173 | 8080 |
| Build de producción | `vite build` | `webpack --mode production` |
| Carpeta de salida | `dist` | `dist` |

## Modificación en vivo

Durante la demostración se modificará el porcentaje del impuesto en el archivo `calculator.js`.

Valor inicial:

```javascript
export const TAX_RATE = 0.13;
```

Cambio realizado en vivo:

```javascript
export const TAX_RATE = 0.15;
```

Este cambio permite observar cómo cada herramienta detecta la modificación y actualiza la aplicación durante el desarrollo.

## Conclusión

Vite y Webpack permiten desarrollar y construir aplicaciones web modernas, pero utilizan enfoques diferentes.

Vite se caracteriza por una configuración inicial sencilla y un servidor de desarrollo rápido.

Webpack ofrece mayor control y personalización mediante su archivo de configuración, loaders y plugins.

La demostración no busca establecer un ganador absoluto. La herramienta adecuada depende de las características y necesidades de cada proyecto.