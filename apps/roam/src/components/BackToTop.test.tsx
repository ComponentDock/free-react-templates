import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
    window.scrollY = 500
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('scrolls back to the top when pressed', () => {
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    render(<BackToTop />)
    window.scrollY = 500
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides again when scrolled back above the threshold', () => {
    render(<BackToTop />)
    window.scrollY = 500
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
    window.scrollY = 100
    fireEvent.scroll(window)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })
})
