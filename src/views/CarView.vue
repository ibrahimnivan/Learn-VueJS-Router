<script setup>
  import { useRoute, RouterView, useRouter } from 'vue-router';
  import cars from '../data/cars.json';

  const route = useRoute()
  const router = useRouter()

  const carId = parseInt(route.params.id)

  const car = cars.find(c => c.id === carId)

  const showContact = () => {
    if(carId === 4) return; // not show contact for id 4
    return router.push(`/cars/${carId}/contact`)
  }
  
</script>

<template>
  <div v-if="car">
    <h1>Car View</h1>
    <p>Car Name : {{ car.name }}</p>
    <p>Year : {{ car.year }}</p>
    <p>Price : {{ car.price }}</p>
    <button @click="showContact">Click for contact</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Car not Found</h1>
  </div>
</template>