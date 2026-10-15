# TecnoShop – Pre-entrega React

Tienda de tecnología hecha con React + Vite.

## Cómo correrlo

```bash
npm install
cp .env.example .env     # y pegá tu API key de imgbb
npm run dev
```

## Estructura

```
public/productos.json     datos de los productos
src/components/           una carpeta por componente: Layout, Header, Footer, Equipo, Contador,
                          Item, ItemList, ItemListContainer, FormularioContainer, FormularioProducto
```

## Deploy

`npm run build` genera la carpeta `dist/` que se sube a Netlify.
Si usás variables de entorno en Netlify: Site configuration → Environment variables → `VITE_IMGBB_API_KEY`.
