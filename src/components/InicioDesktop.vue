<template>
      <div class="d-flex flex-column h-100 w-100 justify-space-evenly align-content-center align-center ">
        <div class="text-h4 font-weight-bold text-primary">INFORMACIÓN DEL ALUMNO</div>
        <v-img
            width="250"
            max-height="250"
            aspect-ratio="16/9"
            cover
            class="rounded-circle"
            src="@/assets/juanEscutia.jpeg"></v-img>
        <v-container class="w-50" >


          <div class="d-flex flex-row w-100 justify-space-between align-content-center">
            <v-sheet class="pa-2 ma-2 " min-width="250">
              <p class="text-primary font-weight-bold text-h6">Nombre Completo</p>
              <p class="text-secondary font-weight-bold text-h6">{{array.nombre}}</p>
            </v-sheet>
            <v-sheet class="pa-2 ma-2  " min-width="200">
              <p class="text-primary font-weight-bold text-h6 ">Matricula</p>
              <p class="text-secondary font-weight-bold text-h6">{{ array.matricula }}</p>
            </v-sheet>
          </div>

          <div class="d-flex flex-row w-100 justify-space-between align-content-center">

            <v-sheet align="start" min-width="250" class="pa-2 ma-2">
              <p class="text-primary font-weight-bold text-h6">Correo Institucional</p>
              <p class="text-secondary font-weight-bold text-h6">{{array.correoInstitucional}}</p>
            </v-sheet>


            <v-sheet align="start" min-width="200" class="pa-2 ma-2">
              <p class="text-primary font-weight-bold text-h6">Carrera</p>
              <p class="text-secondary font-weight-bold text-h6">{{array.carrera}}</p>
            </v-sheet>

          </div>

          <div class="w-100">
            <v-sheet align="start" class="pa-2 ma-2">
              <p class="text-primary font-weight-bold text-h6">Correo Personal</p>
              <p class="text-secondary font-weight-bold text-h6">{{ array.correoPersonal }}</p>
            </v-sheet>
          </div>

        </v-container>
      </div>
</template>

<script >
  export default {
    name:"InicioDesktop",
    data() {
      return {
        array:
          {
            nombre:'Juan Escutia',
            matricula: 'A01361234',
            correoInstitucional: 'A01361234@tec.mx',
            carrera:'ISC',
            correoPersonal:'murioporlapatria@gmail.com',
          }
      };
    },
  }
</script>