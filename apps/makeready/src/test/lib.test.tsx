import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isValidEmail, validateEnquiry } from '../lib/forms'
import { parallaxOffset } from '../lib/motion'
import { scrollMetrics, scrollToTop, SHADOW_AT, TOP_AT, useScrollMetrics } from '../lib/scroll'
import { THEME_KEY, applyTheme, initialTheme, useTheme } from '../lib/theme'
import { installMedia } from './helpers'

afterEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  vi.unstubAllGlobals()
})

describe('scrollMetrics', () => {
  it('reads the three thresholds from one position', () => {
    expect(scrollMetrics(0, 2000, 1000)).toEqual({ progress: 0, shadow: false, top: false })
    expect(scrollMetrics(SHADOW_AT + 1, 2000, 1000)).toEqual({
      progress: 5.1,
      shadow: true,
      top: false,
    })
    expect(scrollMetrics(TOP_AT + 1, 2000, 1000)).toMatchObject({ shadow: true, top: true })
  })

  it('clamps at 100 % and never divides by a zero range', () => {
    expect(scrollMetrics(5000, 1500, 1000).progress).toBe(100)
    expect(scrollMetrics(120, 900, 900).progress).toBe(0)
  })

  it('drives the header shadow and the disc from one listener', () => {
    const { result } = renderHook(() => useScrollMetrics())
    expect(result.current).toEqual({ progress: 0, shadow: false, top: false })

    act(() => {
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 400 })
      Object.defineProperty(document.documentElement, 'scrollHeight', {
        configurable: true,
        value: 2000,
      })
      Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toEqual({ progress: 40, shadow: true, top: true })
  })
})

describe('scrollToTop', () => {
  it('scrolls smoothly by default', () => {
    installMedia({ reduce: false })
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    scrollToTop()

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('jumps instantly under reduced motion', () => {
    installMedia({ reduce: true })
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    scrollToTop()

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('theme', () => {
  it('prefers a stored choice and falls back to the system preference', () => {
    installMedia({ dark: false })
    expect(initialTheme()).toBe('light')

    installMedia({ dark: true })
    expect(initialTheme()).toBe('dark')

    localStorage.setItem(THEME_KEY, 'light')
    expect(initialTheme()).toBe('light')

    localStorage.setItem(THEME_KEY, 'dark')
    expect(initialTheme()).toBe('dark')

    localStorage.setItem(THEME_KEY, 'sepia')
    expect(initialTheme()).toBe('dark')
  })

  it('applies and removes the class the dark variants key off', () => {
    applyTheme('dark')
    expect(document.documentElement).toHaveClass('dark')

    applyTheme('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('toggles, persists and re-applies the choice', () => {
    localStorage.setItem(THEME_KEY, 'light')
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('light')
    expect(document.documentElement).not.toHaveClass('dark')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
    expect(document.documentElement).toHaveClass('dark')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })
})

describe('parallaxOffset', () => {
  it('moves only while the element is near the viewport', () => {
    expect(parallaxOffset(400, 0.15, 100, 500, 900)).toBe(60)
    expect(parallaxOffset(400, -0.1, 100, 500, 900)).toBe(-40)
    expect(parallaxOffset(400, 0.15, 1200, 1500, 900)).toBe(0)
    expect(parallaxOffset(400, 0.15, -600, -300, 900)).toBe(0)
  })
})

describe('forms', () => {
  it('accepts only a plausible address', () => {
    expect(isValidEmail(' studio@makeready.design ')).toBe(true)
    expect(isValidEmail('studio@makeready')).toBe(false)
    expect(isValidEmail('studio makeready.design')).toBe(false)
  })

  it('asks for the three things it needs and treats the subject as optional', () => {
    expect(Object.keys(validateEnquiry({ name: '', email: '', subject: '', message: '' }))).toEqual(
      ['name', 'email', 'message'],
    )
    expect(
      validateEnquiry({ name: 'Ada', email: 'not-an-address', subject: '', message: 'Hello' }),
    ).toEqual({ email: 'That address looks incomplete. Check it and send again.' })
    expect(
      validateEnquiry({
        name: 'Ada',
        email: 'ada@example.com',
        subject: '',
        message: 'The bindery is late',
      }),
    ).toEqual({})
  })
})
