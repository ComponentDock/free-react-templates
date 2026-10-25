import { useState } from 'react'

export type Theme = 'light' | 'dark'

export const THEME_KEY = 'theme'

/**
 * The pre-paint script in `index.html` has already resolved the class, so the
 * hook only reads it back and persists an explicit choice on toggle.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem(THEME_KEY, next)
    setTheme(next)
  }

  return { theme, toggle }
}
