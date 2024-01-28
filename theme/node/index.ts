import type { Plugin } from 'vite'
import type { ResolvedValaxyOptions } from 'valaxy'
import type { ThemeConfig } from '../types'

export * from './config'
export * from './unocss'

// write a vite plugin
// https://vitejs.dev/guide/api-plugin.html
export function themePlugin(options: ResolvedValaxyOptions<ThemeConfig>): Plugin {
  const themeConfig = options.config.themeConfig || {}

  return {
    name: 'valaxy-theme-gitlink',

    config() {
      return {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `$c-primary: ${themeConfig.colors?.primary || '#0078E7'} !default;`,
            },
          },
        },

        valaxy: {},
      }
    },
  }
}
