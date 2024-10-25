<script lang="ts" setup>
import type { Todo } from '@/types/todos'

const todo = defineModel<Todo>({ required: true })
</script>

<template>
  <div
    class="todo-item hover:ring-1 ring-offset-2 ring-violet-600 duration-500"
  >
    <label>
      <input v-model="todo.completed" type="checkbox" />
      {{ todo.title }}
      <span class="check-btn"></span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;

  label {
    position: relative;
    display: flex;
    align-items: center;

    input {
      margin-right: 16px;
      opacity: 0;

      &:checked + .check-btn::after {
        opacity: 1;
      }
    }

    .check-btn {
      position: absolute;

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      &::before {
        border: 1px solid #b382f9;
        top: 50%;
        transform: translateY(-50%);
      }

      &::after {
        transition: 0.4s;
        background: #b382f9;
        opacity: 0;
        transform: translateY(-50%) scale(0.8);
      }
    }
  }
}
</style>
