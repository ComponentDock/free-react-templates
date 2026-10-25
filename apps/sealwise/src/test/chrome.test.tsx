import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  BackToTop,
  COOKIE_KEY,
  CookieStrip,
  MobileCallBar,
  Preloader,
  ScrollProgress,
  SkipLink,
} from '../components/Chrome'
import { chrome, site } from '../content'
import { installMedia, setScroll } from './helpers'

describe('page chrome', () => {
  beforeEach(() => {
    installMedia()
  })

  afterEach(() => {
    vi.useRealTimers()
    localStorage.clear()
  })

  it('renders the skip link first', () => {
    render(<SkipLink />)
    expect(screen.getByRole('link', { name: chrome.skip })).toHaveAttribute('href', '#main-content')
  })

  it('never traps content behind the preloader', () => {
    const ready = vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading')
    const { unmount } = render(<Preloader />)
    expect(screen.getByTestId('preloader')).toBeInTheDocument()
    act(() => {
      window.dispatchEvent(new Event('load'))
    })
    expect(screen.queryByTestId('preloader')).toBeNull()
    ready.mockRestore()

    // A document that is already complete paints straight through.
    const completed = render(<Preloader />)
    expect(completed.container.querySelector('#preloader')).toBeNull()
    unmount()
  })

  it('unbinds its load listener when it unmounts early', () => {
    const ready = vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading')
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Preloader />)
    unmount()
    expect(remove).toHaveBeenCalledWith('load', expect.any(Function))
    ready.mockRestore()
  })

  it('paints the progress bar from the scroll ratio', () => {
    render(<ScrollProgress />)
    const bar = screen.getByTestId('scroll-progress')
    expect(bar).toHaveStyle({ width: '0%' })
    setScroll(500, 2000, 1000)
    expect(bar).toHaveStyle({ width: '50%' })
  })

  it('enables the back-to-top disc past 300 px and scrolls home', async () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, writable: true, value: scrollTo })
    render(<BackToTop />)
    const disc = screen.getByTestId('back-to-top')
    expect(disc).toHaveClass('pointer-events-none')

    setScroll(400, 2000, 1000)
    expect(disc).toHaveClass('opacity-100')
    await userEvent.click(disc)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('scrolls instantly when the reader asked for reduced motion', async () => {
    installMedia({ reduce: true })
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, writable: true, value: scrollTo })
    render(<BackToTop />)
    setScroll(400, 2000, 1000)
    await userEvent.click(screen.getByTestId('back-to-top'))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })

  it('shows the cookie strip once, stores the decision and stops asking', () => {
    vi.useFakeTimers()
    const { unmount } = render(<CookieStrip />)
    const strip = screen.getByTestId('cookie-strip')
    expect(strip).toHaveClass('translate-y-[120%]')

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(strip).toHaveClass('translate-y-0')
    expect(strip).toHaveAttribute('role', 'dialog')
    expect(screen.getByText(chrome.cookie.copy)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: chrome.cookie.decline }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
    unmount()

    // The next visit reads the stored decision and never renders the strip.
    render(<CookieStrip />)
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('accepts all and cancels the timer on unmount', () => {
    vi.useFakeTimers()
    const first = render(<CookieStrip />)
    first.unmount()

    localStorage.setItem(COOKIE_KEY, 'essential')
    const second = render(<CookieStrip />)
    expect(second.container.querySelector('[role="dialog"]')).toBeNull()
    localStorage.clear()

    render(<CookieStrip />)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    fireEvent.click(screen.getByRole('button', { name: chrome.cookie.accept }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('accepted')
  })

  it('offers one normalised phone action on small screens', () => {
    render(<MobileCallBar />)
    const call = screen.getByRole('link', { name: new RegExp(site.phone.replace(/[()]/g, '\\$&')) })
    expect(call).toHaveAttribute('href', 'tel:+15550400400')
  })
})
