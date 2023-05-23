<script>
import {routes} from "./main.js";

export default  {
  setup() {
    return {routes};
  }
}
</script>

<template>
    <router-link class="link" v-for="route of routes[0].children" :to="route.path" :key="route">{{route.name}}</router-link>
    <!-- <router-view v-slot="{ Component, route }">
    <Transition name="route" mode="out-in">
        <component :key="route.name" :is="Component" />
    </Transition>
  </router-view> -->
  <router-view />
</template>

<style scoped>
.link {
  margin-right: 20px;
  display: block;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 1;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
