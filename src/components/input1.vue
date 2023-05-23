<template>
  <h1>input</h1>
  <div class="card">
    <input />
  </div>
</template>

<script>
import {ref} from "vue";
export default {
    name: 'input',
    setup() {
        const count = ref(0)
    return {count}
    }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
