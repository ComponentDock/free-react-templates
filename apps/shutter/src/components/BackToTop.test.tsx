import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(500)
    fireEvent.scroll(window)
    expect(button).toHaveClass('opacity-100')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(50)
    fireEvent.scroll(window)
    expect(button).toHaveClass('opacity-0')
  })

  it('scrolls to the top when activated', () => {
    const scrollTo = vi.fn()
    vi.spyOn(window, 'scrollTo').mockImplementation(scrollTo)
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(500)
    render(<BackToTop />)
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
