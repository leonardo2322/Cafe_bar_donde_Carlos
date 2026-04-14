recordar que si agrego un elemento en la data debo ir a products.js a ingresar la condicion para iterar ese item en la card modal y en paginacion agregar el item a iterar en "tipoDatos"
en la bd tambien se debe hacer el cambio de platos
en findProductModal.js tambien se debe cambiar la opcion.p
para que por defecto elija la primer opcion
y por ultimo en la carpeta helpers el archivo optionsNavigation.js se debe cambiar el nombre de options.p
# Catálogo (Proyecto web)

Este es un proyecto de catálogo / tienda simple construido con HTML, CSS y JavaScript puro (sin frameworks). Incluye paginación, filtrado por categoría, modal de detalle, y un carrito básico.

---

## 🚀 Cómo ejecutar

1. Abrir `index.html` directamente en el navegador.
2. (Opcional) Servir con un servidor local para evitar problemas de CORS y rutas:
   - Con Node.js: `npx serve` o `python -m http.server` desde la carpeta del proyecto.

---

## 🧩 Estructura del proyecto

- `index.html` — página principal.
- `assets/css/` — estilos.
  - `style.css`, `index.css`
- `assets/js/` — lógica de la aplicación.
  - `main.js` — entrypoint principal.
  - `components/` — módulos (carrito, navegación, paginación, productos, etc.).
  - `data/data.js` — datos de productos.
  - `helpers/` — utilidades (dark mode, formato de moneda, navegación, etc.).
- `terminos/` — páginas de términos y políticas.

---

## 🛠️ Cómo agregar o modificar productos

1. Edita el archivo `assets/js/data/data.js` y agrega/modifica el objeto del producto.
2. Si agregas una nueva categoría o tipo de producto, revisa `assets/js/components/products.js` y ajusta las condiciones de filtrado/iteración si es necesario.
3. En `assets/js/components/paginations.js`, actualiza la lista `tipoDatos` si introduces un nuevo 