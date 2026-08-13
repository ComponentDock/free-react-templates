import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('starts hidden and appears after scrolling past the threshold', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')

    Object.defineProperty(window, 'scrollY', { value: 600, configurable: true })
    fireEvent.scroll(window)
    expect(button).toHaveClass('opacity-100')
  })

  it('scrolls to the top when clicked', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, configurable: true })
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 600, configurable: true })
    fireEvent.scroll(window)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<BackToTop />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
