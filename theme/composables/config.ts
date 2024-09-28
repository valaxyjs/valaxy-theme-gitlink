import type { ThemeConfig } from '../types'
import { useValaxyConfig } from 'valaxy'
import { computed } from 'vue'

/**
 * getThemeConfig
 */
export function useThemeConfig<T = ThemeConfig>() {
  const config = useValaxyConfig<T>()
  return computed(() => config.value.themeConfig)
}
