import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('scrolls smoothly to the top when clicked and cleans up its listener', () => {
    const scrollTo = vi.fn()
    const originalScrollTo = window.scrollTo
    window.scrollTo = scrollTo

    const { unmount } = render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 900, configurable: true })
    fireEvent.scroll(window)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    unmount()
    window.scrollTo = originalScrollTo
  })
})
