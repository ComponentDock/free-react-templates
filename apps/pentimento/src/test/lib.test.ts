import { describe, expect, it, vi } from 'vitest'
import { parallaxOffset } from '../lib/motion'
import { isValidEmail, validateEnquiry } from '../lib/forms'
import { prefersReducedMotion, scrollMetrics, scrollToTop } from '../lib/scroll'
import { applyTheme, initialTheme, THEME_KEY } from '../lib/theme'
import { installMedia } from './helpers'

describe('scrollMetrics', () => {
  it('reads the scroll fraction and both thresholds', () => {
    expect(scrollMetrics(500, 2000, 1000)).toEqual({ progress: 50, shadow: true, top: true })
  })

  it('never reports more than a full bar', () => {
    expect(scrollMetrics(5000, 2000, 1000).progress).toBe(100)
  })

  it('reports zero when the page does not scroll', () => {
    expect(scrollMetrics(0, 900, 900)).toEqual({ progress: 0, shadow: false, top: false })
  })
})

describe('prefersReducedMotion and scrollToTop', () => {
  it('follows the media query', () => {
    installMedia({ reduce: true })
    expect(prefersReducedMotion()).toBe(true)

    installMedia({ reduce: false })
    expect(prefersReducedMotion()).toBe(false)
  })

  it('scrolls smoothly, and instantly when motion is reduced', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    installMedia({ reduce: false })
    scrollToTop()
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' })

    installMedia({ reduce: true })
    scrollToTop()
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('parallaxOffset', () => {
  it('moves with the scroll while the element is near the viewport', () => {
    expect(parallaxOffset(400, 0.15, 100, 500, 900)).toBeCloseTo(60)
    expect(parallaxOffset(400, -0.1, 100, 500, 900)).toBeCloseTo(-40)
  })

  it('parks the transform when the element is far above or below', () => {
    expect(parallaxOffset(400, 0.15, 1200, 1600, 900)).toBe(0)
    expect(parallaxOffset(400, 0.15, -900, -300, 900)).toBe(0)
  })
})

describe('theme', () => {
  it('prefers a stored choice to the system preference', () => {
    installMedia({ dark: true })
    localStorage.setItem(THEME_KEY, 'light')
    expect(initialTheme()).toBe('light')

    localStorage.setItem(THEME_KEY, 'dark')
    expect(initialTheme()).toBe('dark')
  })

  it('falls back to the system preference, then to light', () => {
    localStorage.setItem(THEME_KEY, 'system')
    installMedia({ dark: true })
    expect(initialTheme()).toBe('dark')

    installMedia({ dark: false })
    expect(initialTheme()).toBe('light')
  })

  it('toggles the class the dark variants hang off', () => {
    applyTheme('dark')
    expect(document.documentElement).toHaveClass('dark')

    applyTheme('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })
})

describe('forms', () => {
  it('accepts a complete address and trims it first', () => {
    expect(isValidEmail(' studio@kjeldsen.art ')).toBe(true)
    expect(isValidEmail('studio@kjeldsen')).toBe(false)
    expect(isValidEmail('studio kjeldsen.art')).toBe(false)
  })

  it('asks for a name, a usable address and a message', () => {
    expect(
      validateEnquiry({ name: '', email: '', subject: '', message: '' }),
    ).toEqual({
      name: 'Please give a name I can reply to.',
      email: 'An e-mail address is required.',
      message: 'Please say which work this is about.',
    })

    expect(
      validateEnquiry({ name: 'A Collector', email: 'collector@example', subject: '', message: 'Hello' }),
    ).toEqual({ email: 'That address looks incomplete. Check it and send again.' })
  })

  it('is empty when everything required is there', () => {
    expect(
      validateEnquiry({
        name: 'A Collector',
        email: 'collector@example.com',
        subject: '',
        message: 'Is the kitchen painting still free?',
      }),
    ).toEqual({})
  })
})
