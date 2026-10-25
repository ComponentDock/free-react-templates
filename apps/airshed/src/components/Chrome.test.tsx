import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './Chrome'

const originalScrollTo = window.scrollTo
const originalReadyState = Object.getOwnPropertyDescriptor(Document.prototype, 'readyState')
const originalMatchMedia = window.matchMedia

beforeEach(() => {
  window.localStorage.clear()
  window.scrollTo = vi.fn()
})

afterEach(() => {
  vi.useRealTimers()
  window.scrollTo = originalScrollTo
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
  if (originalReadyState) {
    Object.defineProperty(document, 'readyState', originalReadyState)
  }
})

describe('SkipLink', () => {
  it('is the first focusable element and targets the main landmark', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link.className).toContain('sr-only')
  })
})

describe('ScrollProgress', () => {
  it('is a 2 px violet bar whose width is the scroll fraction', () => {
    render(<ScrollProgress progress={42} />)
    const bar = document.querySelector('[data-scroll-progress]') as HTMLElement
    expect(bar.style.width).toBe('42%')
    expect(bar.className).toContain('bg-primary-600')
    expect(document.getElementById('scroll-progress')?.className).toContain('h-0.5')
  })
})

describe('CookieStrip', () => {
  it('slides up after 1,500 ms and stores an acceptance', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)
    const strip = document.querySelector('[data-cookie-consent]') as HTMLElement
    expect(strip.className).toContain('translate-y-full')

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect((document.querySelector('[data-cookie-consent]') as HTMLElement).className).toContain(
      'translate-y-0',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Accept' }))
    expect(window.localStorage.getItem('cookie-consent')).toBe('accepted')
    expect(document.querySelector('[data-cookie-consent]')).toBeNull()
  })

  it('stores an essential-only choice', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    fireEvent.click(screen.getByRole('button', { name: 'Essential only' }))
    expect(window.localStorage.getItem('cookie-consent')).toBe('essential')
    expect(document.querySelector('[data-cookie-consent]')).toBeNull()
  })

  it('stays dismissed and unscheduled when the answer is already stored', () => {
    vi.useFakeTimers()
    window.localStorage.setItem('cookie-consent', 'accepted')
    render(<CookieStrip />)
    expect((document.querySelector('[data-cookie-consent]') as HTMLElement).className).toContain(
      'translate-y-full',
    )
  })

  it('clears its timer on unmount', () => {
    vi.useFakeTimers()
    const clear = vi.spyOn(window, 'clearTimeout')
    const { unmount } = render(<CookieStrip />)
    unmount()
    expect(clear).toHaveBeenCalled()
  })
})

describe('BackToTop', () => {
  it('is invisible below 300 px of scroll', () => {
    render(<BackToTop y={299} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button.className).toContain('opacity-0')
    expect(button.className).toContain('pointer-events-none')
  })

  it('shows past 300 px and scrolls home on click', () => {
    render(<BackToTop y={480} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button.className).toContain('opacity-100')
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('Preloader', () => {
  it('renders the spinner until the document is ready', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({ matches: false }),
    })
    render(<Preloader />)
    const sheet = document.getElementById('preloader') as HTMLElement
    expect(sheet.className).toContain('z-[100]')

    fireEvent(window, new Event('load'))
    expect(document.getElementById('preloader')).toBeNull()
  })

  it('removes itself on a stalled asset after the 4 s guard', () => {
    vi.useFakeTimers()
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({ matches: false }),
    })
    render(<Preloader />)
    expect(document.getElementById('preloader')).not.toBeNull()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(document.getElementById('preloader')).toBeNull()
  })

  it('paints nothing when the document is already complete', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' })
    render(<Preloader />)
    expect(document.getElementById('preloader')).toBeNull()
  })

  it('is skipped entirely under prefers-reduced-motion', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({ matches: true }),
    })
    render(<Preloader />)
    expect(document.getElementById('preloader')).toBeNull()
  })
})
