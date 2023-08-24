<template>
  <div class="contenedorNavegacion">
    <div @click="mostrarMenu" class="menuHamburguesa">
      <img src="@/assets/img/menu.png" alt="Menu" />
    </div>
    <div class="navegacion" id="navegacion" :class="{ mostrar: mostrar }" ref="scrollNav">
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/nosotros">Nosotros</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
    <div class="contenidoNavegacion flex">
      <div class="contenidoLogo">
        <div class="logo"><img src="@/assets/img/logoblanco.png" alt="" /></div>
        <div class="textoHead">
          <p>
            COMERCIALIZACIÓN Y DISTRIBUCIÓN DE <br />
            INSUMOS PARA RESTAURANTES, SUSHI,<br />
            PIZZAS Y PRODUCTOS CONGELADOS
          </p>
        </div>
        <div class="btn">
          <a href="https://wa.link/wfn0ov"><button>CONTACTA UN ASESOR</button></a>
        </div>
      </div>
      <div class="contenidoImagenHead">
        <img src="@/assets/img/productosinicio.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const scrollNav = ref();
const mostrar = ref(false);
const mostrarMenu = () => {
  mostrar.value = !mostrar.value;
};

const scroll = () => {
  if (window.scrollY > 500) {
    scrollNav?.value?.classList?.add?.("scrolearNav");
  } else if (window.scrollY < 500) {
    scrollNav?.value?.classList?.remove?.("scrolearNav");
  }
};

onMounted(() => {
  window.addEventListener("scroll", scroll);
});
</script>
