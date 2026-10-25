import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './Chrome'
import { COOKIE_COPY } from '../content'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  window.localStorage.clear()
})

describe('SkipLink', () => {
  it('is the first focusable stop and targets the content', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('sr-only', 'focus:not-sr-only')
  })
})

describe('ScrollProgress', () => {
  it('paints the ratio it is given', () => {
    const { container } = render(<ScrollProgress progress={42.5} />)
    const bar = container.querySelector('[data-scroll-progress]')
    expect(bar).toHaveStyle({ width: '42.5%' })
    expect(bar).toHaveClass('h-full', 'bg-primary-600')
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('CookieStrip', () => {
  it('slides up 1.5 s after mount, stores acceptance and unmounts', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip).toHaveClass('translate-y-full')
    expect(screen.getByText(COOKIE_COPY)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toHaveClass('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(window.localStorage.getItem('cookie-consent')).toBe('accepted')
  })

  it('records the essential choice on Decline', () => {
    render(<CookieStrip />)
    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(window.localStorage.getItem('cookie-consent')).toBe('essential')
  })
})

describe('BackToTop', () => {
  it('stays inert above 300 px and appears past it', () => {
    const { rerender } = render(<BackToTop y={120} />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toHaveClass(
      'pointer-events-none',
      'opacity-0',
    )

    rerender(<BackToTop y={420} />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toHaveClass(
      'pointer-events-auto',
      'opacity-100',
      'h-12',
      'w-12',
      'bg-primary-600',
    )
  })

  it('returns the page to the top when pressed', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(<BackToTop y={500} />)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
