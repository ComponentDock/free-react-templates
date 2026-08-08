import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('BackToTop', () => {
  it('is hidden until the page is scrolled', () => {
    render(<BackToTop />)

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')
    expect(button).toHaveClass('pointer-events-none')
  })

  it('appears after scrolling past 300px', () => {
    render(<BackToTop />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, configurable: true, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-100')
  })

  it('scrolls back to the top when clicked', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo

    render(<BackToTop />)

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true, writable: true })
    window.dispatchEvent(new Event('scroll'))

    await user.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('cleans up its scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
