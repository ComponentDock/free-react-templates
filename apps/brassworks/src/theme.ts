import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

export const THEME_KEY = 'theme'
export const COOKIE_KEY = 'cookie-consent'

/**
 * Stored choice wins; with no stored choice the OS preference decides. A stored
 * `light` therefore overrides a dark OS preference, which is the behaviour the
 * bootstrap script in index.html reproduces before first paint.
 */
export function preferredTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  return prefersDark ? 'dark' : 'light'
}

/** Class-based theme: `.dark` on <html> is the only switch. */
export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function useTheme(): { dark: boolean; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(() =>
    preferredTheme(
      window.localStorage.getItem(THEME_KEY),
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    ),
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem(THEME_KEY, next)
    applyTheme(next)
    setTheme(next)
  }, [theme])

  return { dark: theme === 'dark', toggle }
}

/** The reference's panel is remembered, not re-asked. */
export function hasAnsweredCookies(): boolean {
  return window.localStorage.getItem(COOKIE_KEY) !== null
}

export function rememberCookies(): void {
  window.localStorage.setItem(COOKIE_KEY, 'answered')
}
