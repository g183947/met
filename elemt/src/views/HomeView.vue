<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<style>
.home {
  overflow: hidden;
  overflow-x: hidden;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
