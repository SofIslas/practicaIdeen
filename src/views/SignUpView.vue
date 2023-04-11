<template>
  <div class="h-100 pa-2">
    <SignUpDesktop />
  </div>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import SignUpDesktop from "@/components/SignUpDesktop.vue";
export default defineComponent({
  name: 'SignUpView',

  components: {
    SignUpDesktop,
  },
});
</script>