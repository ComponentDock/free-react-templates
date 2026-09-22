import { render, screen, fireEvent } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('does not render when scrolled to top', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: /back to top/i })).not.toBeInTheDocument()
  })

  it('appears when scrolled down', () => {
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument()
  })

  it('scrolls to top when clicked', () => {
    const scrollToSpy = vi.fn()
    Object.defineProperty(window, 'scrollTo', {
      value: scrollToSpy,
      writable: true,
      configurable: true,
    })
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
    fireEvent.scroll(window)
    const btn = screen.getByRole('button', { name: /back to top/i })
    btn.click()
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides when scrolled back to top', () => {
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument()
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(screen.queryByRole('button', { name: /back to top/i })).not.toBeInTheDocument()
  })
})
