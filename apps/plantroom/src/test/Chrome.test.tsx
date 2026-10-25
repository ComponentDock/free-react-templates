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
    expect(bar.style.width).toBe('100%')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    setScroll({ scrollY: 0, height: 400, inner: 800 })

    expect(screen.getByTestId('scroll-progress')).toHaveAttribute('aria-valuenow', '0')
    expect(screen.getByTestId('scroll-progress').style.width).toBe('0%')
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

    setScroll({ scrollY: 10, height: 2000, inner: 800 })
    expect(button).toHaveClass('opacity-0', 'pointer-events-none')

    setScroll({ scrollY: 400, height: 2000, inner: 800 })
    expect(button).toHaveClass('opacity-100')
    expect(button).toHaveClass('h-12', 'w-12')
  })

  it('smooth-scrolls back to the top when activated', async () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })
    const user = userEvent.setup()
    render(<BackToTop />)

    setScroll({ scrollY: 500, height: 3000, inner: 800 })
    await user.click(screen.getByRole('button', { name: 'Back to top' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('removes its listener on unmount', () => {
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)

    unmount()

    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    remove.mockRestore()
  })
})

describe('CookieStrip', () => {
  it('renders nothing until it is opened', () => {
    const { container } = render(<CookieStrip open={false} onDismiss={() => {}} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('dismisses on either choice, with the accessible name the house uses', async () => {
    const onDismiss = vi.fn()
    const user = userEvent.setup()
    render(<CookieStrip open onDismiss={onDismiss} />)

    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByText(/We use cookies to enhance your experience/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Decline' }))
    await user.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(onDismiss).toHaveBeenCalledTimes(2)
  })
})
