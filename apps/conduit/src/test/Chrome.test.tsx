import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  BackToTop,
  COOKIE_DELAY,
  COOKIE_KEY,
  CookieStrip,
  Preloader,
  ScrollProgress,
  SkipLink,
  StickyCallBar,
} from '../components/Chrome'
import { LicenceBar } from '../components/LicenceBar'
import { site } from '../content'
import { setScroll } from './helpers'

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

    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).toBeNull()
    readyState.mockRestore()
  })
})

describe('ScrollProgress and BackToTop', () => {
  it('paints the progress bar as a percentage of the scrollable height', () => {
    render(<ScrollProgress />)
    act(() => setScroll(500, 2000, 1000))
    expect(screen.getByTestId('scroll-progress')).toHaveStyle({ width: '50%' })
  })

  it('keeps the disc inert until 300 px and then scrolls home on click', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    render(<BackToTop />)
    act(() => setScroll(0, 2000, 1000))
    const disc = screen.getByTestId('back-to-top')
    expect(disc).toHaveClass('opacity-0', 'pointer-events-none')

    act(() => setScroll(320, 2000, 1000))
    expect(disc).toHaveClass('opacity-100', 'translate-y-0')

    await user.click(disc)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('StickyCallBar', () => {
  it('carries one full-width call link and hides itself at lg', () => {
    render(<StickyCallBar />)
    const bar = screen.getByTestId('call-bar')
    expect(bar).toHaveClass('fixed', 'bottom-0', 'lg:hidden')
    expect(screen.getByRole('link', { name: /Sewage backing up\? Call today/ })).toHaveAttribute(
      'href',
      site.phoneHref,
    )
  })
})

describe('CookieStrip', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useRealTimers()
  })

  it('appears after the delay and stores an acceptance', async () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    expect(screen.queryByTestId('cookie-strip')).toBeNull()

    act(() => vi.advanceTimersByTime(COOKIE_DELAY))
    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip).toBeInTheDocument()

    vi.useRealTimers()
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(localStorage.getItem(COOKIE_KEY)).toBe('accepted')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('stores an essential-only choice from the decline button', async () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    act(() => vi.advanceTimersByTime(COOKIE_DELAY))
    vi.useRealTimers()
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Decline' }))

    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')
  })

  it('never appears when a choice was already stored', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    vi.useFakeTimers()
    render(<CookieStrip />)

    act(() => vi.advanceTimersByTime(COOKIE_DELAY * 2))

    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })
})

describe('LicenceBar', () => {
  it('states the licence, the served counties and the sample rating', () => {
    render(<LicenceBar />)

    expect(screen.getByText(site.licence)).toBeInTheDocument()
    expect(screen.getByText('Liner manufacturer certified')).toBeInTheDocument()
    expect(screen.getByText(site.area)).toBeInTheDocument()
    expect(screen.getByText(site.rating)).toBeInTheDocument()
    expect(screen.getByText(site.reviews)).toBeInTheDocument()
  })
})
