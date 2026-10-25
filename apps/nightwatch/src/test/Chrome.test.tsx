import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  BackToTop,
  COOKIE_DELAY,
  COOKIE_KEY,
  CookieStrip,
  Preloader,
  ScrollProgress,
  SkipLink,
} from '../components/Chrome'
import { restoreMedia, setScroll, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  localStorage.clear()
  restoreMedia()
  Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' })
  setScroll(0, 0)
})

describe('SkipLink', () => {
  it('targets the main landmark and is visually hidden until focused', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })

    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('sr-only', 'focus:not-sr-only')
  })
})

describe('Preloader', () => {
  it('is gone immediately when the document has already loaded', () => {
    render(<Preloader />)

    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('waits for the load event when the document is still loading', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })
    render(<Preloader />)

    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })
    expect(screen.queryByTestId('preloader')).toBeNull()
  })
})

describe('ScrollProgress', () => {
  it('is two pixels tall and tracks half of the scrollable height', () => {
    render(<ScrollProgress />)
    const bar = screen.getByTestId('scroll-progress')

    expect(bar).toHaveClass('h-0.5', 'bg-primary-600')
    expect(bar).toHaveStyle({ width: '0%' })

    setScroll(2000, 5000, 1000)
    expect(bar).toHaveStyle({ width: '50%' })
  })
})

describe('BackToTop', () => {
  it('stays inert under 300 px and scrolls up once active', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })

    expect(button).toHaveClass('pointer-events-none', 'opacity-0')

    setScroll(301, 5000, 1000)
    expect(button).toHaveClass('opacity-100', 'translate-y-0')

    const scrollTo = vi.spyOn(window, 'scrollTo')
    fireEvent.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('scrolls instantly when motion is reduced', () => {
    stubMedia(true)
    render(<BackToTop />)
    setScroll(400, 5000, 1000)

    const scrollTo = vi.spyOn(window, 'scrollTo')
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('CookieStrip', () => {
  it('slides in after the delay and stores a decision', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    expect(screen.queryByTestId('cookie-strip')).toBeNull()

    act(() => {
      vi.advanceTimersByTime(COOKIE_DELAY)
    })
    expect(screen.getByRole('dialog', { name: 'Cookie notice' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('accepted')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('records the essential-only choice and never shows again', () => {
    vi.useFakeTimers()
    const { unmount } = render(<CookieStrip />)

    act(() => {
      vi.advanceTimersByTime(COOKIE_DELAY)
    })
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss cookie notice' }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')

    unmount()
    localStorage.clear()
    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(COOKIE_DELAY)
    })
    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')

    unmount()
    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(COOKIE_DELAY * 2)
    })
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })
})
