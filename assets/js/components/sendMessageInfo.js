import { cart, renderCart } from "./cart.js";

export const sendMessage = () => {
  const send = document.getElementById("send");

  send.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Obtener campos requeridos
    const direccion = document.getElementById("Direccion").value.trim();
    const inmueble = document.getElementById("inmueble").value.trim();
    
    // Validar que los campos requeridos no estén vacíos
    if (!direccion || !inmueble) {
      Swal.fire({
          title: 'Campos incompletos',
          text: 'Por favor completa los campos de Dirección e Inmueble.',
          icon: 'warning', // success | error | warning | info | question
          confirmButtonText: 'Aceptar'
        });
      return;
    }
    
    const data = leerLocalStorage();
    const totalCart = data.totalCart;
    const products = data.productsCart;
    
    // Validar que el carrito no esté vacío
    if (products.length === 0) {
      Swal.fire({
          title: 'Carrito Vacío',
          text: 'Tu carrito está vacío. Por favor agrega productos antes de continuar.',
          icon: 'warning', // success | error | warning | info | question
          confirmButtonText: 'Aceptar'
        });
      return;
    }
    
    const EditPlates = document.getElementById("textoEdit");
    const textEdit = EditPlates.value ? EditPlates.value : "Sin Ediciones";
    const empresa = "Cafe Bar Donde Carlos"
    const nombre = document.getElementById("Nombre").value || "No proporcionado"


    const mediosPago =
      "Solicita nuestros medios de pago en el chat gracias , 💵 ";
    let textoProducto = "";
    let counterProduct = Math.round(Math.random() * 2557);

    products.map((item) => {
      const titulo = item.titulo;
      const precio = item.precio;
      const cantidad = item.quantity;

      textoProducto += `Producto: ${titulo},  cantidad: ${cantidad},  Precio: $${precio} \n`;

      counterProduct++;
    });

    let mensage = `Orden N°: ${counterProduct} \n \n Hola Te Saluda ${empresa} 👋 \n \n Tipo de servicio: Compra🛒\n \nMedios de Pago: ${mediosPago}💰💸 \n \n Descripcion: 📝\n ${textoProducto} \n \n Total Compra: $${totalCart}💵 \n \nLa Orden tiene las Siguientes Ediciones: \n \n${textEdit}📝 \n \n Datos para entrega: Nombre: ${nombre} - Dirección: ${direccion} - Inmueble: ${inmueble}....
    \n \n Gracias por comprar con nosotros enseguida te atenderemos🕦.`;

    const tlf = "573108231770";

    const enlaceWhatsapp =
      `https://wa.me/${tlf}/?text=` + encodeURIComponent(mensage);

    window.open(enlaceWhatsapp, "_blank");

    cart.items = [];
    renderCart();
  });
};

function leerLocalStorage() {
  let dataStorage = cart.methods.getAll();
  const totalCart = cart.methods.getTotal();
  let productsCart = [];

  dataStorage.map((item) => {
    productsCart.push(item);
  });

  return {
    productsCart,
    totalCart,
    dataStorage,
  };
}
