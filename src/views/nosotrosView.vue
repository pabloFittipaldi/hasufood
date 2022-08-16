<template>
  <NavegacionComponents />
  <div class="contenedorNosotros">
    <div>
      <div><img src="@/assets/img/logo.png" alt="Logo Hasu" /></div>

      <h3>NOSOTROS</h3>
      <p>
        Somos una empresa dedicada a la comercialización y distribución de insumos para restaurantes sushi, pizzas y productos congelados. especializados en la
        gastronomía japonesa contamos con un amplio surtido de productos y un centro de alto estándar.
      </p>
    </div>
    <div>
      <h3>VISIÓN</h3>
      <p>A la vanguardia del mercado gastronómico de chile. Entregando la mejor calidad en servicio a nuestros clientes</p>
    </div>
    <div>
      <h3>MISIÓN</h3>
      <p>Distribuir productos alimenticios a un excelente precio brindando calidad e innovación. Aspiramos a ser una empresa líder en el mercado nacional.</p>
    </div>
  </div>
  <footerComponents />
</template>

<script setup>
import NavegacionComponents from "@/components/navegacionComponents.vue";
import footerComponents from "@/components/footerComponents.vue";
</script>
