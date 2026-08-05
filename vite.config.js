import { defineConfig } from "vite";
import { resolve } from "node:path";
import handlebars from "vite-plugin-handlebars";
import productosData from "./src/data/productos.js";
import galeriaData from "./src/data/galeria.js";
import testimoniosData from "./src/data/testimonios.js";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(
        import.meta.dirname,
        "src/handlebars"
      ),

      context(pagePath) {
        if (pagePath === "/productos.html") {
          return productosData;
        }
        
        if (pagePath === "/galeria.html") {
          return galeriaData;
        }

        if (pagePath === "/testimonios.html") {
          return testimoniosData;
        }

        return {};
      }
    })
  ],

  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        productos: resolve(import.meta.dirname, "productos.html"),
        galeria: resolve(import.meta.dirname, "galeria.html"),
        productos: resolve(import.meta.dirname, "productos.html"),
        testimonios: resolve(import.meta.dirname, "testimonios.html")
      }
    }
  }
});