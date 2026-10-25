import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  BackToTop,
  COOKIE_KEY,
  CookieStrip,
  MobileBar,
  Preloader,
  ScrollProgress,
  SkipLink,
} from '../components/Chrome'
import { setScroll } from './helpers'

describe('SkipLink', () => {
  it('points at the main landmark and stays out of the way until focused', () => {
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

    expect(screen.getByTestId('preloader')).toHaveClass('bg-white')

    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).toBeNull()
    readyState.mockRestore()
  })
})

describe('ScrollProgress and BackToTop', () => {
  it('paints a 2 px charcoal bar at the scroll fraction', () => {
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
  })
})

describe('CookieStrip', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
  })

  it('slides in after a second and a half, above the mobile bar', () => {
    render(<CookieStrip />)

    const strip = screen.getByTestId('cookie-strip')
    expect(strip).toHaveClass('translate-y-[120%]', 'bottom-[69px]')
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByTestId('cookie-spacer')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(/We use cookies to enhance your experience/)).toBeInTheDocument()

    act(() => vi.advanceTimersByTime(1500))
    expect(strip).toHaveClass('translate-y-0')
  })

  it('stores an acceptance and removes the strip and its spacer', () => {
    render(<CookieStrip />)

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(localStorage.getItem(COOKIE_KEY)).toBe('accepted')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
    expect(screen.queryByTestId('cookie-spacer')).toBeNull()
  })

  it('stores an essential-only choice from the decline button', () => {
    render(<CookieStrip />)

    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(localStorage.getItem(COOKIE_KEY)).toBe('essential')
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('never reappears once a decision is stored', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')

    render(<CookieStrip />)

    expect(screen.queryByTestId('cookie-strip')).toBeNull()
    expect(screen.queryByTestId('cookie-spacer')).toBeNull()

    act(() => vi.advanceTimersByTime(3000))
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })
})

describe('MobileBar', () => {
  it('offers the studio number and the enquiry band, both of which exist', () => {
    render(<MobileBar />)

    expect(screen.getByTestId('mobile-bar')).toHaveClass('lg:hidden')
    expect(screen.getByRole('link', { name: /Call the studio/ })).toHaveAttribute(
      'href',
      'tel:+35315590284',
    )
    expect(screen.getByRole('link', { name: 'Enquire' })).toHaveAttribute('href', '#contact')
  })
})
