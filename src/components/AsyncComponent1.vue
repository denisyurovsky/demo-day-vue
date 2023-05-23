<template>
<p v-for="(todo, i) of todos" :key="todo.id">
    {{i + 1}}. {{todo.title}}: {{todo.completed ? null : 'not' }} finished
    </p>
</template>

<script>
import {ref} from "vue";
import http from "../../axios/http.js"
export default {
    name: 'AsyncComponent1',
    async setup() {
        const todos = ref();
        todos.value = await (await http.get('todos')).data;

        return {todos};
    },
}
</script>
