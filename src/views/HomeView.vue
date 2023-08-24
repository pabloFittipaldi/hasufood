<template>
  <div class="contenedorInicio">
    <navegacionComponents />

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/descartablesslice.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/descartablesslice1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/descartablesslice2.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

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
              :class="{ error: validate.nombre.$error }"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre y Apellido"
              minlength="3"
              maxlength="30"
            />
            <span :class="{ 'text-danger': validate.nombre.$error }"> {{ validate.nombre.$errors[0]?.$message }}</span>
            <input
              v-model="formulario.email"
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              minlength="1"
              maxlength="60"
              required
              :class="{ error: validate.email.$error }"
            />
            <span :class="{ 'text-danger': validate.email.$error }"> {{ validate.email.$errors[0]?.$message }}</span>
            <input
              v-model="formulario.telefono"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              minlength="5"
              maxlength="20"
              required
              :class="{ error: validate.telefono.$error }"
            />
            <span :class="{ 'text-danger': validate.telefono.$error }"> {{ validate.telefono.$errors[0]?.$message }}</span>
            <input v-model="formulario.consulta" id="consulta" name="consulta" required placeholder="Consulta" :class="{ error: validate.consulta.$error }" />
            <span :class="{ 'text-danger': validate.consulta.$error }"> {{ validate.consulta.$errors[0]?.$message }}</span>
            <input v-if="!loading" @click.prevent="enviarfomulario" id="submit" name="submit" type="submit" value="ENVIAR" minlength="4" maxlength="200" />
            <div v-else class="spinner-border"></div>
            <span v-if="error" class="text-danger"> Error al enviar el correo</span>
            <span v-if="success" class="text-success"> Se envio correctamente</span>
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
import { reactive, ref, toRefs } from "@vue/reactivity";
import { required, minLength, helpers, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
const formulario = reactive({
  nombre: "",
  telefono: "",
  email: "",
  consulta: "",
});
const errorsText = {
  required: "El campo es requerido",
  minLength: (length) => {
    return `El campo debe tener al menos ${length} caracteres`;
  },
  email: "El campo debe ser un correo válido",
};
const rules = {
  nombre: {
    required: helpers.withMessage(() => errorsText.required, required),
    minLength: helpers.withMessage(({ $params }) => errorsText.minLength($params.min), minLength(4)),
  },
  telefono: {
    required: helpers.withMessage(() => errorsText.required, required),
    minLength: helpers.withMessage(({ $params }) => errorsText.minLength($params.min), minLength(9)),
  },
  email: {
    required: helpers.withMessage(() => errorsText.required, required),
    email: helpers.withMessage(() => errorsText.email, email),
  },
  consulta: {
    required: helpers.withMessage(() => errorsText.required, required),
  },
};
const error = ref(false);
const success = ref(false);
const loading = ref(false);
const validate = useVuelidate(rules, toRefs(formulario));
const enviarfomulario = async () => {
  try {
    error.value = false;
    loading.value = true;
    validate.value.$touch();
    if (validate.value.$invalid) {
      return false;
    }
    await axios.post("https://mailsapp.herokuapp.com/email/", {
      nombre: formulario.nombre,
      telefono: formulario.telefono,
      email: formulario.email,
      subject: formulario.consulta,
    });
    success.value = true;
    limpiarFormulario();
  } catch (error) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};
const limpiarFormulario = () => {
  formulario.nombre = "";
  formulario.telefono = "";
  formulario.email = "";
  formulario.consulta = "";
  validate.value.$reset();
};
</script>

<style scoped>
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}
</style>
