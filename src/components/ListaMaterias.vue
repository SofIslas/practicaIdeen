<template>

    <div class="d-flex h-100 flex-column  align-center justify-lg-space-evenly " >
      <div class="text-h5 text-primary w-50 text-center font-weight-bold">MATERIAS INSCRITAS</div>
      <v-card
          class="ma-4 rounded-lg elevation-3"
          v-for="item in array"
          :key="item.id"
          width="90%"
          max-width="750"
      >
        <v-card-title class="text-primary">{{ item.materia }}</v-card-title>
        <v-card-subtitle class=" text-subtitle-1 font-weight-bold">Profesor: {{ item.profesor }}</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="text-body-1 text-primary">Ver Detalles</v-btn>
        </v-card-actions>
      </v-card>

    </div>
</template>

<script >
export default {
  name: "ListaMaterias",
  data() {
    return {
      array: [
        {
          id:78456,
          materia: 'Titulo de la materia',
          profesor: 'Cristiano Ronaldo'
        },
        {
          id:78542,
          materia: 'Titulo',
          profesor: 'Cristiano Ronaldo'
        },
        {
          id:98241,
          materia: 'Titulo',
          profesor: 'Cristiano Ronaldo'
        },
        {
          id:79450,
          materia: 'Titulo',
          profesor: 'Cristiano Ronaldo'
        },
      ]
    };
  },
};
</script>