<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

const filters = ref([
  { key: 'all', label: '全部' },
  { key: 'active', label: '未完成' },
  { key: 'completed', label: '已完成' },
])

const { filter } = storeToRefs(useTodosStore())
</script>

<template>
  <div class="flex items-center my-6 mx-0.5 text-[#c0c2ce] text-sm">
    <span
      v-for="item in filters"
      :key="item.key"
      :class="{ 'text-[#6b729c] scale-125': item.key === filter }"
      class="mr-4 duration-700 cursor-pointer"
      @click="filter = item.key"
    >
      {{ item.label }}
    </span>
  </div>
</template>
