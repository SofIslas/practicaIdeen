<template>
  <div class="h-100 pa-2">
    <LoginDesktop/>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import LoginDesktop from "@/components/LoginDesktop.vue";
export default defineComponent({
  name: 'LoginView',

  components: {
    LoginDesktop,
  },
});
</script>