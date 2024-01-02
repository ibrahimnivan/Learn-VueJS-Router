<script setup> 
import {RouterLink} from 'vue-router'

</script>

<template>
  <div>
   <RouterLink active-class="active" to="/">Home</RouterLink> 
   <br>
   <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
  .active {
    font-weight: 900;
    color: gold;
  }
</style>