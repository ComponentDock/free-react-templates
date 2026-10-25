import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  BackToTop,
  COOKIE_KEY,
  CookieStrip,
  Preloader,
  ScrollProgress,
  SkipLink,
} from '../components/Chrome'
import { setScroll, stubMedia } from './helpers'

describe('SkipLink', () => {
  it('is the first focusable element and points at the main landmark', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('sr-only')
  })
})

describe('Preloader', () => {
  it('is already finished when the document has loaded', () => {
    render(<Preloader />)
    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('waits for the load event and then removes itself', () => {
    const readyState = vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading')
    render(<Preloader />)

    expect(screen.getByTestId('preloader')).toHaveClass('bg-ink-900')

    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).toBeNull()
    readyState.mockRestore()
  })
})

describe('ScrollProgress and BackToTop', () => {
  it('paints a 2 px brass bar at the scroll fraction', () => {
    render(<ScrollProgress />)
    act(() => setScroll(500, 2000, 1000))

    const bar = screen.getByTestId('scroll-progress')
    expect(bar).toHaveStyle({ width: '50%' })
    expect(bar).toHaveClass('h-0.5', 'bg-primary-600')
  })

  it('keeps the disc inert until 300 px and then scrolls home', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    render(<BackToTop />)
    act(() => setScroll(0, 2000, 1000))
    const disc = screen.getByTestId('back-to-top')
    expect(disc).toHaveClass('opacity-0', 'pointer-events-none', 'h-12', 'w-12', 'rounded-full')

    act(() => setScroll(320, 2000, 1000))
    expect(disc).toHaveClass('opacity-100', 'translate-y-0')

    await user.click(disc)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    stubMedia(true)
    await user.click(disc)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('CookieStrip', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('shows on the first visit with a spacer so it never covers the footer bar', () => {
    render(<CookieStrip />)

    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByTestId('cookie-spacer')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(/We use cookies to enhance your experience/)).toBeInTheDocument()
  })

  it('stores an acceptance and removes the strip', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(localStorage.getItem(COOKIE_KEY)).toBe('accepted')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
    expect(screen.queryByTestId('cookie-spacer')).toBeNull()
  })

  it('stores an essential-only choice from the decline button', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    await user.click(screen.getByRole('button', { name: 'Decline' }))

    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('never reappears once a decision is stored', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')

    render(<CookieStrip />)

    expect(screen.queryByTestId('cookie-strip')).toBeNull()
    expect(screen.queryByTestId('cookie-spacer')).toBeNull()
  })
})
