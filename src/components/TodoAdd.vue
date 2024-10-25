<script lang="ts" setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const newTodo = ref('')

/**
 * 生成uuid
 */
const uuid = () => {
  let uuid = ''
  for (let i = 0; i < 32; i++) {
    const random = (Math.random() * 16) | 0
    if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-'
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
  }
  return uuid
}

/**
 * 添加待办事项
 */
const addTodo = () => {
  if (!newTodo.value) return
  const { addTodo } = useTodosStore()
  addTodo({ id: uuid(), title: newTodo.value, completed: false })
  newTodo.value = ''
}
</script>

<template>
  <div class="relative flex items-center">
    <input
      v-model.trim="newTodo"
      autofocus
      class="py-4 pr-[52px] pl-[18px] rounded-full border-0 outline-0 w-full shadow-sm text-base text-[#626262] placeholder:italic placeholder:text-gray-400 focus:ring-1 ring-offset-2 ring-violet-600 duration-300"
      name="todo"
      placeholder="What needs to be done?"
      type="text"
      @keyup.enter="addTodo"
    />
  </div>
</template>
