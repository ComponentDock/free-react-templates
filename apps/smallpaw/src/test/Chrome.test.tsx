import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, ScrollProgress } from '../components/Chrome'

afterEach(() => {
  vi.unstubAllGlobals()
})

function setScroll({ scrollY, height, inner }: { scrollY: number; height: number; inner: number }) {
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: height,
  })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: inner })
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('ScrollProgress', () => {
  it('maps the scrolled ratio onto the bar width, clamped at 100', () => {
    render(<ScrollProgress />)
    const bar = screen.getByTestId('scroll-progress')

    setScroll({ scrollY: 250, height: 1050, inner: 50 })
    expect(bar).toHaveAttribute('aria-valuenow', '25')
    expect(bar.style.width).toBe('25%')

    setScroll({ scrollY: 5000, height: 1050, inner: 50 })
    expect(bar).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    setScroll({ scrollY: 0, height: 400, inner: 800 })

    expect(screen.getByTestId('scroll-progress')).toHaveAttribute('aria-valuenow', '0')
  })

  it('removes its listener on unmount', () => {
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgress />)

    unmount()

    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    remove.mockRestore()
  })
})

describe('BackToTop', () => {
  it('stays inert at the top and appears past 300 px', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })

    setScroll({ scrollY: 120, height: 3000, inner: 800 })
    expect(button).toHaveClass('opacity-0')

    setScroll({ scrollY: 640, height: 3000, inner: 800 })
    expect(button).toHaveClass('opacity-100')
  })

  it('scrolls smoothly back to the top when pressed', async () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(<BackToTop />)

    await userEvent.click(screen.getByRole('button', { name: 'Back to top' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})

describe('CookieStrip', () => {
  it('renders nothing until the delay has passed', () => {
    render(<CookieStrip open={false} onDismiss={() => {}} />)

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('dismisses from either button', async () => {
    const onDismiss = vi.fn()
    const { rerender } = render(<CookieStrip open onDismiss={onDismiss} />)

    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toHaveClass('z-50')
    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(onDismiss).toHaveBeenCalledTimes(1)

    rerender(<CookieStrip open onDismiss={onDismiss} />)
    await userEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(onDismiss).toHaveBeenCalledTimes(2)
  })
})
