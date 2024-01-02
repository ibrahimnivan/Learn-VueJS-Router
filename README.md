# Learn Vue Route

1. `npm i vue-router` : package for vue router

2. define our route in separate file

```javascript
import AboutViewVue from "@/views/AboutView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // the default of BASE_URL is '/'
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
    },
  ],
});

export default router;
```

3. in `main.js`

```javascript
import "./assets/main.css";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
```

4. in App.vue we use to applying the rules

```javascript
<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
```

5. add navigation bar

**problem**

- changing route is refreshing our aplication and reset vue `state`
  solution: we use <RouterLink to="/"> instead of <a href="/">

6. build in props for active router: `active-class`
   ` <RouterLink active-class="active" to="/about">About</RouterLink>`
   -- we can add style for .active

7. DYNAMIC ROUTING
   `<RouterLink :to="`/cars/${car.id}`"`

-- route definition for dinamic routing

```javascript
 {
      path: "/cars/:id",
      name: "car",
      component: CarViewVue
    }
```

- to utilize dynamic route using params

```javascript
import { useRoute } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();

const car = cars.find((c) => c.id === parseInt(route.params.id));
```

8. NESTED ROUTE
   route definition: use `children`

```javascript
{
      path: "/cars/:id",
      name: "car",
      component: CarViewVue,
      children: [
        {
          path: "contact",
          component: ContactViewVue
        }
      ]

    }
```

-- use `RouterView` in parent(CarView)
-- use `useRoute` in children(ContactView)

9. `useRouter` not useRoute in children(ContactView)
   `useRoute` for path information (path, query redirectedFrom etc),
   `useRouter` for utilize button and not using `RouterLink` or `a` tag for modification our url path

```javascript
// how to use useRouter
<script setup>
  import { useRoute, RouterView, useRouter } from 'vue-router';
  import cars from '../data/cars.json';

  const route = useRoute()
  const router = useRouter

  const carId = parseInt(route.params.id)

  const car = cars.find(c => c.id === carId)

</script>

<template>
  <div>
    <h1>Car View</h1>
    <p>Car Name :{{ car.name }}</p>
    <p>Year :{{ car.year }}</p>
    <p>Price :{{ car.price }}</p>
    <button @click="router.push(`/cars/${carId}/contact`)"></button>
    <RouterView />
  </div>
</template>
```

10. create particular page that doesnt exist

- scenorio 1. **path doesn't exist** e.g. cars/15434

```javascript
// solution: using directives v-if and v-else
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
```

- scenario 2. write **random route** e.g. /banana
  -- define special path and its component (NotFoundView)
```javascript
 {
      path: "/:catchall(.*)*",
      name: "not found",
      component: NotFoundViewVue
    }
```

11. REDIRECT 
-- to redirect from  a certain NotFound page to a certain available page
```javascript
    {
      path: "/",
      name: "home",
      component: HomeViewVue
    }, {
      path: "/home",
      redirect: "/" // redirect
    },
```

