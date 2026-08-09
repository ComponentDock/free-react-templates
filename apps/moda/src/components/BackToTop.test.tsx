import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('BackToTop', () => {
  it('renders nothing until the user scrolls past the threshold', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('appears after scrolling and scrolls back to the top on click', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollY', { value: 600, configurable: true, writable: true })
    window.scrollTo = scrollTo
    render(<BackToTop />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toBeInTheDocument()
    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides again when scrolled back above the threshold', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true, writable: true })
    render(<BackToTop />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })
})
