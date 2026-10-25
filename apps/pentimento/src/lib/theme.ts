import { useCallback, useEffect, useState } from 'react'

export const THEME_KEY = 'theme'
export type Theme = 'light' | 'dark'

/** Stored choice first, then the reader's system preference. */
export function initialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export interface ThemeControl {
  theme: Theme
  toggle: () => void
}

/**
 * The light page is the default. The toggle writes the class the `dark:`
 * variants key off and remembers the choice, so the next visit opens the same
 * way (index.html repeats the read before paint, which is what stops a flash).
 */
export function useTheme(): ThemeControl {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, next)
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
