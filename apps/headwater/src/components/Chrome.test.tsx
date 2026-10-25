import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, Preloader, ScrollProgress, SkipLink } from './Chrome'

const originalScrollTo = window.scrollTo

beforeEach(() => {
  window.localStorage.clear()
  window.scrollTo = vi.fn()
})

afterEach(() => {
  vi.useRealTimers()
  window.scrollTo = originalScrollTo
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
  it('is a 2 px bar whose width is the scroll fraction', () => {
    render(<ScrollProgress progress={42} />)
    const bar = document.querySelector('[data-scroll-progress]') as HTMLElement
    expect(bar.style.width).toBe('42%')
    expect(bar.className).toContain('bg-primary-600')
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
    expect(strip.className).toContain('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(window.localStorage.getItem('cookie-consent')).toBe('accepted')
    expect(document.querySelector('[data-cookie-consent]')).toBeNull()
  })

  it('stores a decline', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(window.localStorage.getItem('cookie-consent')).toBe('essential')
    expect(document.querySelector('[data-cookie-consent]')).toBeNull()
  })

  it('stays shut once the visitor has already answered', () => {
    vi.useFakeTimers()
    window.localStorage.setItem('cookie-consent', 'accepted')
    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    const strip = document.querySelector('[data-cookie-consent]') as HTMLElement
    expect(strip.className).toContain('translate-y-full')
  })
})

describe('BackToTop', () => {
  it('is inert above 300 px', () => {
    render(<BackToTop y={120} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button.className).toContain('pointer-events-none')
  })

  it('appears past 300 px and scrolls to the top', () => {
    render(<BackToTop y={640} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button.className).toContain('pointer-events-auto')

    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('Preloader', () => {
  it('is gone once the document is ready', () => {
    render(<Preloader />)
    expect(document.getElementById('preloader')).toBeNull()
  })

  it('covers the page until the load event fires', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, get: () => 'loading' })
    render(<Preloader />)
    expect(document.getElementById('preloader')).not.toBeNull()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })
    expect(document.getElementById('preloader')).toBeNull()

    Object.defineProperty(document, 'readyState', { configurable: true, get: () => 'complete' })
  })
})
