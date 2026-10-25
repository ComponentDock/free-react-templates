import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, MobileCtaBar, ScrollProgress, SkipLink } from './Chrome'

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
  it('is a 2 px orange bar whose width is the scroll fraction', () => {
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

  it('never schedules itself when the answer is already stored', () => {
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

  it('shows past 300 px, clears the mobile bar and scrolls home', () => {
    render(<BackToTop y={480} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button.className).toContain('opacity-100')
    expect(button.className).toContain('bottom-24')
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('MobileCtaBar', () => {
  it('offers the phone number and the list dialog', () => {
    const onOpenQuote = vi.fn()
    render(<MobileCtaBar onOpenQuote={onOpenQuote} />)
    const bar = document.getElementById('mobile-cta') as HTMLElement
    expect(bar.className).toContain('h-[69px]')
    expect(bar.className).toContain('lg:hidden')

    const call = screen.getByRole('link', { name: /Call now/ })
    expect(call).toHaveAttribute('href', 'tel:+441134960288')

    fireEvent.click(screen.getByRole('button', { name: /Send the list/ }))
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
  })
})
