<template>
  <div class="d-none d-sm-flex w-100 h-100 py-2 ">
    <LoginDesktop/>
  </div>
  <div class="d-flex d-sm-none w-100 h-auto py-2">
    <LogInMobile/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import LoginDesktop from "@/components/LoginDesktop.vue";
import LogInMobile from "@/components/LogInMobile.vue";
export default defineComponent({
  name: 'LoginView',

  components: {
    LoginDesktop,
    LogInMobile,
  },
});
</script>