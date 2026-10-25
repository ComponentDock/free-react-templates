import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, Preloader, ScrollProgress, SkipLink } from '../components/Chrome'

afterEach(() => {
  vi.restoreAllMocks()
  Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' })
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

    setScroll(500)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '50%' })

    setScroll(2000)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    setScroll(100, 900)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})

describe('Preloader', () => {
  it('renders nothing once the document is already complete', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' })
    render(<Preloader />)

    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('covers the page while loading and unmounts on load', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })
    render(<Preloader />)

    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).toBeNull()
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
