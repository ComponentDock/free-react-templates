import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />)

    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('scrolls back to the top when clicked', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    Object.defineProperty(window, 'scrollY', { value: 600, configurable: true, writable: true })

    render(<BackToTop />)
    fireEvent.scroll(window)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
