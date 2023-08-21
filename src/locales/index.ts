import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import viVN from './vi-VN'
import enUS from './en-US'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import { useAppStoreWithOut } from '@/store/modules/app'
import type { Language } from '@/store/modules/app/helper'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'vi-VN'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'vi-VN',
  allowComposition: true,
  messages: {
    'vi-VN': viVN,
    'en-US': enUS,
		'zh-CN': zhCN,
    'zh-TW': zhTW,
  },
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
