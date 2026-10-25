import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
  vi.restoreAllMocks()
})

describe('BackToTop', () => {
  it('is inert at the top of the page', () => {
    render(<BackToTop />)

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0', 'pointer-events-none')
  })

  it('appears past 300 px and returns the page to the top when activated', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, configurable: true, writable: true })
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
  })

  it('cleans up its scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
