import { computed } from 'vue'
import { useValaxyConfig } from 'valaxy'
import type { ThemeConfig } from '../types'

/**
 * getThemeConfig
 */
export function useThemeConfig<T = ThemeConfig>() {
  const config = useValaxyConfig<T>()
  return computed(() => config.value.themeConfig)
}
