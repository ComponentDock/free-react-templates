import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('does not render when page is at top', () => {
    render(<BackToTop />)
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument()
  })

  it('renders when scrolled down', async () => {
    render(<BackToTop />)

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
  })

  it('scrolls to top on click', async () => {
    const user = userEvent.setup()
    render(<BackToTop />)

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const scrollTo = vi.fn()
    window.scrollTo = scrollTo

    await user.click(screen.getByLabelText('Back to top'))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
