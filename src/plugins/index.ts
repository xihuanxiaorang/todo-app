import { setupPinia } from '@/plugins/pinia'
import type { App } from 'vue'

/**
 * 注册插件
 * @param app Vue 实例
 */
export function setupPlugins(app: App) {
  setupPinia(app)
}
