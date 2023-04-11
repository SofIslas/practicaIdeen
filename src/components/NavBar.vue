<template>
  <v-app-bar flat color="primary">
    <v-row v-if="dato === 'loggedIn'" justify="space-between" class="mx-4">
      <router-link class="  ma-2 pa-1" to="/"><v-img width="150"  src="@/assets/logoTec.png"/></router-link>
      <div class="d-flex" >
        <router-link class="text-button text-decoration-none text-white ma-2 pa-1" to="/">Inicio</router-link>
        <router-link class="text-button text-decoration-none text-white ma-2 pa-1" to="/materias">Lista de Materias</router-link>
      </div>
    </v-row>
    <v-row v-else justify="space-between" class="mx-4">
      <router-link class="  ma-2 pa-1" to="/login"><v-img width="150"  src="@/assets/logoTec.png"/></router-link>
      <div class="d-flex" >
        <router-link class="text-button text-decoration-none text-white ma-2 pa-1" to="/login">LogIn</router-link>
        <router-link class="text-button text-decoration-none text-white ma-2 pa-1" to="/signup">SignUp</router-link>
      </div>
    </v-row>
  </v-app-bar>
</template>
<script>

import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(['usuario']),
    dato () {
      return this.usuario
    }
  },


}
</script>