<template>
  <h1>Counter 1</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
    name: 'counter1',
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
