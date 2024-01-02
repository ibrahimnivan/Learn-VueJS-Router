<script setup>
  import {useRoute} from 'vue-router';
  import cars from '../data/cars.json'

  const route = useRoute();
  const car = cars.find(c => c.id === parseInt(route.params.id))
</script>

<template>
  <div>
    <h1>Contact Info</h1>
    <p>Dealer : {{ car.contact.dealer }}</p>
    <p>Number : {{ car.contact.number }}</p>
  </div>
</template>