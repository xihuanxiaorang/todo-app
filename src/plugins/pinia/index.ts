import { createPinia } from 'pinia'
import type { App } from 'vue'

/**
 * 注册 pinia 插件
 * @param app Vue 实例
 */
export function setupPinia(app: App) {
  app.use(createPinia())
}
