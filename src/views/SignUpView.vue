<template>
  <div class="d-none d-sm-flex w-100 h-100 py-2 ">
    <SignUpDesktop />
  </div>
  <div class="d-flex d-sm-none w-100 h-auto py-2">
    <SignUpMobile/>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import SignUpDesktop from "@/components/SignUpDesktop.vue";
import SignUpMobile from "@/components/SignUpMobile.vue";
export default defineComponent({
  name: 'SignUpView',

  components: {
    SignUpDesktop,
    SignUpMobile,
  },
});
</script>