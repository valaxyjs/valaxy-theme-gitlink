import type { ThemeConfig, UserThemeConfig } from '../types'

/**
 * valaxy-theme-gitlink
 * @see https://github.com/valaxyjs/valaxy-theme-gitlink
 * define theme config
 */
export function defineThemeConfig(config: UserThemeConfig) {
  return config
}

/**
 * Default Config
 */
export const defaultThemeConfig: ThemeConfig = {
  colors: {
    primary: '#0078E7',
  },

  footer: {
    since: 2022,
    icon: {
      name: 'i-ri-cloud-line',
      animated: true,
      color: 'var(--va-c-primary)',
      url: 'https://sponsors.yunyoujun.cn',
      title: 'Sponsor YunYouJun',
    },

    powered: true,

    beian: {
      enable: false,
      icp: '',
    },
  },

  nav: [],
}
