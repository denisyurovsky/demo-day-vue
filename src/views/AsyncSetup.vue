<template>
<suspense @pending="pendingFunction" @resolve="resolveFunction" @fallback="fallbackFunction">
    <template #default>
        <div>

        <AsyncComponent1 />
        <AsyncComponent1 />
        </div>
    </template>
    <template #fallback>
        <p>{{hasError ? 'some error' : 'loading...'}}</p>
    </template>
</suspense>
</template>

<script>
import { onErrorCaptured, ref } from 'vue'
import AsyncComponent1 from '../components/AsyncComponent1.vue'
export default {
    components: {AsyncComponent1},
    setup() {

        const hasError = ref(false);
        const pendingFunction = () => {
            console.log('pending')
        }
        const resolveFunction = () => {
            console.log('resolve')
        }
        const fallbackFunction = () => {
            console.log('fallback')
        }

        onErrorCaptured((error,componentInstance) => {
            hasError.value = true;
            console.log('error', error)
            console.log('componentInstance', componentInstance)
        },)
        return {
            pendingFunction, resolveFunction, fallbackFunction, hasError
        }
    }
}
</script>