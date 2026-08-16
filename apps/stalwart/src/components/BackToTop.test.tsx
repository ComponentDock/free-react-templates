import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('is hidden at the top of the page', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')
  })

  it('becomes visible after scrolling and scrolls to the top on click', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, writable: true })
    const originalScrollY = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    render(<BackToTop />)
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-100')
    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    act(() => {
      window.scrollY = 0
      window.dispatchEvent(new Event('scroll'))
    })
    expect(button).toHaveClass('opacity-0')
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      writable: true,
      configurable: true,
    })
  })

  it('cleans up the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
