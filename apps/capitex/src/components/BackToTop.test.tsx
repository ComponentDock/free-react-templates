import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('does not render when page is at top', () => {
    render(<BackToTop />)
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument()
  })

  it('renders when scrolled down', () => {
    render(<BackToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
  })

  it('scrolls to top when clicked', async () => {
    const scrollToSpy = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollToSpy, writable: true })
    render(<BackToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    await userEvent.click(screen.getByLabelText('Back to top'))
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides when scrolled back to top', () => {
    render(<BackToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument()
  })

  it('adds and removes scroll listener', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
