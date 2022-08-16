<template>
  <div class="tituloCard">
    <h2>Congelados</h2>
  </div>
  <div class="search">
    <input v-model="search" type="search" name="" id="" class="input-search" />
    <div>
      <input @click="searchProduct" type="submit" value="Buscar" class="mx-2" />
      <input @click="limpiarFiltro" type="submit" value="Limpiar" class="mx-2" />
    </div>
  </div>
  <div class="contenedorProductos">
    <div class="card" v-for="item in productos" :key="item.id">
      <div>
        <img :src="item.imagen" alt="Salmon" />
      </div>
      <div>
        <p>{{ item.nombre }}</p>
      </div>
      <div>
        <span>{{ item.precio }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
const { ref } = require("@vue/reactivity");

const productos = ref([
  {
    id: 1,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 2,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 3,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 4,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 5,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 6,
    nombre: "Rollito de Salmon 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
  {
    id: 7,
    nombre: "Rollito de Pescado 400grs Caja",
    precio: 25000,
    imagen: require("@/assets/img/productos/Sin-titulo-1-2.png"),
  },
]);
const productosSearch = ref([]);
const search = ref("");
const searchProduct = () => {
  console.log(search.value);
  productosSearch.value = productos.value
  productos.value = productosSearch.value.filter((item) => {
    return item.nombre.toLowerCase().includes(search.value.toLowerCase());
  });
  search.value = "";
};
const limpiarFiltro = () => {
  productos.value = productosSearch.value;
  search.value = "";
};
</script>
