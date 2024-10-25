import { defineStore } from 'pinia'
import type { Todo } from '@/types/todos'
import { computed, type Ref, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  /**
   * 待办事项列表
   */
  const todos = ref<Todo[]>([])

  /**
   * 待办事项过滤器
   */
  const filters = {
    active: (todos: Ref<Todo[]>) => todos.value.filter(todo => !todo.completed),
    completed: (todos: Ref<Todo[]>) =>
      todos.value.filter(todo => todo.completed),
  }

  /**
   * 未完成的待办事项列表
   */
  const activeTodos = computed(() => filters.active(todos))

  /**
   * 已完成的待办事项列表
   */
  const completedTodos = computed(() => filters.completed(todos))

  /**
   * 过滤选项
   */
  const filter = ref('all')

  /**
   * 根据过滤选项过滤后的待办事项列表，用于显示不同状态下的待办事项列表
   */
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return activeTodos.value
      case 'completed':
        return completedTodos.value
      default:
        return todos.value
    }
  })

  /**
   * 添加待办事项
   * @param todo 代办事项
   */
  const addTodo = (todo: Todo): void => {
    if (!todo) return
    todos.value.unshift(todo)
  }

  /**
   * 删除待办事项
   * @param todo 待办事项
   */
  const removeTodo = (todo: Todo): void => {
    todos.value.splice(todos.value.indexOf(todo), 1)
  }

  return {
    todos,
    filter,
    filteredTodos,
    addTodo,
    removeTodo,
  }
})
