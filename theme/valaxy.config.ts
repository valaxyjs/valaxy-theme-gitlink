import { defineTheme } from 'valaxy'
import { defaultThemeConfig, generateSafelist, themePlugin } from './node'
import type { ThemeConfig } from './types'

export default defineTheme<ThemeConfig>((options) => {
  return {
    themeConfig: defaultThemeConfig,
    vite: {
      plugins: [themePlugin(options)],
    },
    unocss: {
      shortcuts: [
        ['icon-btn', 'text-[0.9em] inline-flex justify-center items-center cursor-pointer select-none opacity-90 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-600 hover:bg-white rounded-full p-2'],
      ],
      safelist: generateSafelist(options.config.themeConfig as ThemeConfig),
    },
  }
})
