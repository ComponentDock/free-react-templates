import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from '../components/Chrome'
import { cookie } from '../content'
import { setScroll } from './helpers'

afterEach(() => {
  vi.useRealTimers()
})

describe('SkipLink', () => {
  it('points at the main landmark', () => {
    render(<SkipLink />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })
})

describe('ScrollProgress', () => {
  it('is zero at the top and tracks the scrolled ratio', () => {
    render(<ScrollProgress />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')

    act(() => setScroll(500, 2000, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '50%' })

    act(() => setScroll(2500, 2000, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    act(() => setScroll(120, 500, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})

describe('BackToTop', () => {
  it('appears past 300 px and scrolls the document home', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo')
    render(<BackToTop />)

    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()

    act(() => setScroll(299, 4000, 800))
    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()

    act(() => setScroll(1200, 4000, 800))
    const disc = screen.getByRole('button', { name: 'Back to top' })
    expect(disc).toHaveClass('h-12', 'w-12', 'bg-primary-600')

    fireEvent.click(disc)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    act(() => setScroll(0, 4000, 800))
    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()

    scrollTo.mockRestore()
  })
})

describe('CookieStrip', () => {
  it('slides in after 1.5 s and unmounts on Accept All', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    const strip = screen.getByTestId('cookie-strip')
    expect(strip).toHaveAttribute('data-open', 'false')
    expect(strip).toHaveClass('translate-y-full')
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toHaveTextContent(cookie.text)

    act(() => vi.advanceTimersByTime(1500))
    expect(screen.getByTestId('cookie-strip')).toHaveAttribute('data-open', 'true')
    expect(screen.getByTestId('cookie-strip')).toHaveClass('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('unmounts on Decline', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    act(() => vi.advanceTimersByTime(1500))
    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })

  it('unmounts from its mobile close button and clears its timer on teardown', () => {
    vi.useFakeTimers()
    const { unmount } = render(<CookieStrip />)

    fireEvent.click(screen.getByRole('button', { name: 'Close cookie notice' }))
    expect(screen.queryByTestId('cookie-strip')).toBeNull()

    unmount()
    act(() => vi.advanceTimersByTime(2000))
    expect(screen.queryByTestId('cookie-strip')).toBeNull()
  })
})
