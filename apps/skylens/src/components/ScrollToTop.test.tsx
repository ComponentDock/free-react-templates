import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.spyOn(window, 'addEventListener')
    vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('does not render when scroll position is low', () => {
    render(<ScrollToTop />)
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument()
  })

  it('renders when scroll position exceeds threshold', () => {
    render(<ScrollToTop />)
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
  })

  it('scrolls to top on click', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, writable: true })
    render(<ScrollToTop />)
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: /scroll to top/i }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('cleans up scroll listener on unmount', () => {
    const { unmount } = render(<ScrollToTop />)
    unmount()
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
