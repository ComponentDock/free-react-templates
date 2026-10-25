import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

/**
 * Stored choice wins; with no stored choice the system preference decides —
 * that is the reference's own first-paint rule, kept deliberately.
 */
export function readTheme(): Theme {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  const dark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  return dark ? 'dark' : 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

/** One source of truth for the header toggle: class on <html>, choice stored. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return {
    theme,
    isDark: theme === 'dark',
    toggle: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  }
}
