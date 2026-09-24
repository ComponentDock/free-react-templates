import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  it('is not visible initially', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('appears after scrolling and scrolls to top on click', async () => {
    const user = userEvent.setup()
    render(<BackToTop />)

    // Simulate scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const btn = screen.getByRole('button', { name: 'Back to top' })
    expect(btn).toBeInTheDocument()

    const scrollToSpy = vi.spyOn(window, 'scrollTo')
    await user.click(btn)
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    scrollToSpy.mockRestore()
  })
})
