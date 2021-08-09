<template>
  <div id="app" class="container">
    <div class="h1 text-center mt-4 mb-4"> NFT info </div>
    <address-input/>
  </div>
</template>

<script>
import addressInput from './components/input.vue'

export default {
  name: "App",
  components: {
    addressInput
  },
};
</script>

<style>
#app {
}
</style>
