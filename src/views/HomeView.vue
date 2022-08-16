<template>
  <div class="contenedorInicio">
    <navegacionComponents />

    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/img/descartablesslice.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/img/descartablesslice1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/img/descartablesslice2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev carousel-dark"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next carousel-dark"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section class="ofertas" id="ofertas">
      <div>
        <img src="@/assets/img/ofertas.png" alt="" />
      </div>
    </section>

    <section class="contenedorInfo">
      <div class="flex space-beetwen">
        <div class="contenidoInfoLogo">
          <div><img src="@/assets/img/logo.png" alt="logo" /></div>
          <div>
            <p>
              A la vanguardia del mercado gastronomico de chile. <br />
              Entregando la mejor calidad en servicio a nuestros clientes
            </p>
          </div>
        </div>

        <div class="contenidoInfo">
          <div>
            <p>
              DESCARGA Y CONOCE <br />
              TODA NUESTRA <br />
              GAMA DE PRODUCTOS
            </p>
          </div>
          <div class="btn">
            <button>DESCARTABLES</button>
            <button>COMESTIBLES</button>
          </div>
        </div>
      </div>
    </section>

    <section class="contenedorContacto flex-column">
      <div class="grid grid-cel">
        <div class="imagenContacto">
          <img src="@/assets/img/quesos.png" alt="" />
        </div>
        <div class="contenedorFormulario" id="contacto">
          <form action="" method="post" class="fontRoboto">
            <input
              v-model="formulario.nombre"
              :class="{ error: errores?.includes('nombre') }"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre y Apellido"
              minlength="3"
              maxlength="30"
            />

            <input
              v-model="formulario.email"
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              minlength="1"
              maxlength="60"
              required
            />

            <input
              v-model="formulario.telefono"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              minlength="5"
              maxlength="20"
              required
            />

            <input
              v-model="formulario.consulta"
              id="consulta"
              name="consulta"
              required
              placeholder="Consulta"
            />

            <input
              @click.prevent="enviarfomulario"
              id="submit"
              name="submit"
              type="submit"
              value="ENVIAR"
              minlength="4"
              maxlength="200"
            />
          </form>
        </div>
      </div>
      <div>
        <p>
          ESPECIALIZADOS EN GASTRONOMÍA JAPONESA <br />
          CONTAMOS CON UN AMPLIO SURTIDO DE PRODUCTOS <br />
          Y UN CENTRO DE ALTO ESTÁNDAR
        </p>
      </div>
    </section>
  </div>
  <footerComponents />
</template>

<script setup>
import navegacionComponents from "@/components/navegacionComponents.vue";
import footerComponents from "@/components/footerComponents.vue";
import { reactive, ref } from "@vue/reactivity";

const formulario = reactive({
  nombre: "",
  email: "",
  telefono: "",
  consulta: "",
});
const errores = ref([]);
const validarFormulario = () => {
  if (formulario.nombre == "" || formulario.nombre.length < 4) {
    errores.value.push("nombre");
  }
  if (formulario.email == "" || formulario.email < 4) {
    errores.value.push("email");
  }
  if (formulario.telefono == "" || formulario.telefono.length < 9) {
    errores.value.push("nombre");
  }
  if (formulario.consulta == "") {
    errores.value.push("consulta");
  }
  if (errores.value.length > 0) {
    return false;
  }
  return true;
};
const enviarfomulario = () => {
  if (validarFormulario()) {
    alert("Formulario Enviado con Éxito");
    return;
  }
  alert("Llena tus campos");
};
</script>
