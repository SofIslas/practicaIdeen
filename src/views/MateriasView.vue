<template>
  <div class="h-100 pa-2">
    <ListaMaterias />
  </div>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import ListaMaterias from "@/components/ListaMaterias.vue";
export default defineComponent({
  name: 'MateriasView',

  components: {
    ListaMaterias,
  },
});
</script>

