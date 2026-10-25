import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, ScrollProgress } from '../components/Chrome'

afterEach(() => {
  vi.restoreAllMocks()
})

function setScroll(scrollY: number, scrollHeight = 2000) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('ScrollProgress', () => {
  it('is zero at the top and tracks the scrolled ratio', () => {
    render(<ScrollProgress />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')

    setScroll(500)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '50%' })

    setScroll(1000)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    setScroll(100, 900)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})

describe('BackToTop', () => {
  it('appears past 300 px and scrolls home when activated', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })
    render(<BackToTop />)

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0', 'pointer-events-none')

    setScroll(301)
    expect(button).toHaveClass('opacity-100')

    fireEvent.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    setScroll(120)
    expect(button).toHaveClass('opacity-0')
  })
})

describe('CookieStrip', () => {
  it('renders nothing when dismissed', () => {
    render(<CookieStrip open={false} onDismiss={vi.fn()} />)

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('is a labelled dialog above the phone call bar and dismisses on either choice', () => {
    const onDismiss = vi.fn()
    render(<CookieStrip open onDismiss={onDismiss} />)

    const dialog = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(dialog).toHaveClass('z-50', 'fixed', 'bottom-0')

    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(onDismiss).toHaveBeenCalledTimes(2)
  })
})
