import { renderCart } from "./components/cart.js";
import { cartMenu } from "./components/cartMenu.js";
import { findProductModal } from "./components/findProductModal.js";
import { modal } from "./components/modal.js";
import { navBarMenu, scrollToTop } from "./components/navBar.js";
import { renderProducts } from "./components/products.js";
import { sendMessage } from "./components/sendMessageInfo.js";
import { swiper } from "./helpers/swipperJS.js";
import { items } from "./data/data.js";

// Función para verificar y sincronizar localStorage con items
function syncLocalStorageProducts() {
  var itemsJSON = JSON.stringify(items);
  // Obtener el contenido de localStorage si existe
  var productsJSON = localStorage.getItem("products");

  // Comparar el contenido de items con el almacenado en localStorage
  if (productsJSON === null || productsJSON !== itemsJSON) {
    // Si no existe en localStorage o es diferente, actualizamos localStorage
    localStorage.setItem("products", itemsJSON);
    console.log("Se ha actualizado el contenido de items en localStorage.");
  } else {
    // Si son iguales, no hacemos nada
    console.log(
      "El contenido de items en localStorage es igual al del archivo JS."
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Sincronizar localStorage al cargar
  syncLocalStorageProducts();

  // Verificar cada 30 minutos (1800000 ms)
  setInterval(syncLocalStorageProducts, 1800000);

  swiper;
  navBarMenu();
  scrollToTop();
  cartMenu();
  renderProducts();
  renderCart();
  modal();
  sendMessage();
  findProductModal();
});
