<script lang="ts" setup>
import TodoListItem from '@/components/TodoListItem.vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

const { filteredTodos } = storeToRefs(useTodosStore())
</script>

<template>
  <div class="grid gap-y-3.5">
    <TodoListItem
      v-for="(todo, index) in filteredTodos"
      :key="todo.id"
      v-model="filteredTodos[index]"
    />
  </div>
</template>
