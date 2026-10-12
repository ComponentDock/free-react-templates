import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('stays hidden at the top of the page', () => {
    render(<BackToTop />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toHaveClass('opacity-0')
  })

  it('appears after scrolling and returns to the top on click', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, writable: true })
    render(<BackToTop />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 900, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-100', 'rounded-full', 'bg-brand')

    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    act(() => {
      window.scrollY = 0
      window.dispatchEvent(new Event('scroll'))
    })
    expect(button).toHaveClass('opacity-0')
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('removes the scroll listener when it unmounts', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<BackToTop />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
