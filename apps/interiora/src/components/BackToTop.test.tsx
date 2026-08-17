import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('is hidden until the user scrolls down the page', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('appears after scrolling past the threshold', () => {
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true })
    render(<BackToTop />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('scrolls to the top of the page when clicked', async () => {
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true })
    render(<BackToTop />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    await userEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
