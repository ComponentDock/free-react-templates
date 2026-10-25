import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, MobileBar, ScrollProgress, SkipLink } from '../components/Chrome'
import { chrome } from '../content'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

function setScroll({
  scrollY,
  height,
  inner,
}: {
  scrollY: number
  height: number
  inner: number
}) {
  Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: height })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: inner })
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('SkipLink', () => {
  it('is the first link and points at the main landmark', () => {
    render(<SkipLink />)
    expect(screen.getByRole('link', { name: chrome.skip })).toHaveAttribute('href', '#main-content')
  })
})

describe('ScrollProgress', () => {
  it('maps the scrolled remainder onto the bar width and clamps at the top', () => {
    render(<ScrollProgress />)
    const bar = screen.getByTestId('scroll-progress')

    expect(bar.style.width).toBe('0%')

    setScroll({ scrollY: 250, height: 1050, inner: 50 })
    expect(bar.style.width).toBe('25%')

    setScroll({ scrollY: 1200, height: 1050, inner: 50 })
    expect(bar.style.width).toBe('100%')

    setScroll({ scrollY: 90, height: 90, inner: 90 })
    expect(bar.style.width).toBe('0%')
  })
})

describe('BackToTop', () => {
  it('stays hidden until the page is read into, then scrolls home', async () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    const user = userEvent.setup()
    render(<BackToTop />)

    const button = screen.getByRole('button', { name: chrome.backToTop })
    expect(button.className).toContain('opacity-0')

    setScroll({ scrollY: 400, height: 2000, inner: 800 })
    expect(button.className).toContain('opacity-100')

    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('CookieStrip', () => {
  it('slides up after 1.5 s and leaves when accepted', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip.className).toContain('translate-y-full')

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(strip.className).toContain('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: chrome.cookie.accept }))
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })

  it('also leaves when only the essential cookie is allowed', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    fireEvent.click(screen.getByRole('button', { name: chrome.cookie.decline }))
    expect(screen.queryByTestId('cookie-strip')).not.toBeInTheDocument()
  })
})

describe('MobileBar', () => {
  it('carries the two below-lg destinations', () => {
    render(<MobileBar />)
    expect(screen.getByRole('link', { name: chrome.mobileBar.secondary })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: chrome.mobileBar.primary })).toHaveAttribute('href', '#book')
  })
})
