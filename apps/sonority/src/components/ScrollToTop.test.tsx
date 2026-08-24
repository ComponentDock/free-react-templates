import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  it('is not visible at the top of the page', () => {
    render(<ScrollToTop />)
    expect(screen.queryByRole('button', { name: 'Scroll to top' })).not.toBeInTheDocument()
  })

  it('appears when scrolled down', () => {
    render(<ScrollToTop />)
    fireEvent.scroll(window, { target: { scrollY: 500 } })
    expect(screen.getByRole('button', { name: 'Scroll to top' })).toBeInTheDocument()
  })

  it('scrolls to top when clicked', async () => {
    const user = userEvent.setup()
    const scrollToSpy = vi.fn()
    window.scrollTo = scrollToSpy

    render(<ScrollToTop />)
    fireEvent.scroll(window, { target: { scrollY: 500 } })

    const btn = screen.getByRole('button', { name: 'Scroll to top' })
    await user.click(btn)

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides when scrolled back to top', () => {
    render(<ScrollToTop />)
    fireEvent.scroll(window, { target: { scrollY: 500 } })
    expect(screen.getByRole('button', { name: 'Scroll to top' })).toBeInTheDocument()

    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(screen.queryByRole('button', { name: 'Scroll to top' })).not.toBeInTheDocument()
  })
})
