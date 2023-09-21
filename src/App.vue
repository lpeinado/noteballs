<script setup>
  import NavBar from '@/components/layout/NavBar.vue'
</script>

<template>
<div class="app-main">
  <NavBar/>
  <RouterView>

  </RouterView>
</div>

</template>

<style>
@import 'bulma/css/bulma.min.css'
.app-main{
  display:flex;
}
</style>


