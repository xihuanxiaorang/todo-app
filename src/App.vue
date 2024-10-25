<script lang="ts" setup>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main
    class="w-screen min-h-screen grid justify-items-center items-center bg-[#cbd2f0]"
  >
    <div
      class="w-[60%] max-w-[400px] shadow-md rounded-2xl py-12 px-7 bg-[#f5f6fc] my-12"
    >
      <h1 class="my-6 text-2xl text-[#414873] font-medium">
        欢迎使用 Todo App！
      </h1>
      <TodoAdd />
      <TodoFilter />
      <TodoList />
    </div>
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
</style>
