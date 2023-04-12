<template>
  <div class="d-flex d-sm-none w-100 h-auto py-2">
    <InicioMobile/>
  </div>
  <div class="d-none d-sm-flex w-100 h-100 py-2 ">
    <InicioDesktop />
  </div>


</template>

<script>
import { defineComponent } from 'vue';

// Components
import InicioDesktop from "@/components/InicioDesktop.vue";
import InicioMobile from "@/components/InicioMobile.vue";
import {mapState} from "vuex";

export default defineComponent({
  name: 'HomeView',

  components: {
    InicioDesktop,
    InicioMobile
  },
  computed: {
    ...mapState(['usuario']),
    dato () {
      return this.usuario
    }
  },
});
</script>
