<template>
<div class="wrapper">
    <button @click="changeComponent">change component</button>
    <button @click="shouldKeepAlive = !shouldKeepAlive">change keepalive</button>
    keepalive now: {{shouldKeepAlive}}
    <keep-alive v-if="shouldKeepAlive">
            <component :is="component ? 'counter1' : 'input1'"></component>
            
    </keep-alive>
    <component v-else :is="component ? 'counter1' : 'input1'"></component>
</div>
</template>

<script>
import {ref} from "vue";
import counter1 from '../components/counter1.vue';
import input1 from '../components/input1.vue';
export default {
    components: {counter1, input1},
    setup() {
        const component = ref(true);
        const shouldKeepAlive = ref(false);
            const changeComponent = () => {
                component.value = !component.value
            }
        return {
            component,
            changeComponent,
            shouldKeepAlive
        }
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>