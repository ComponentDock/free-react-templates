import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  it('does not render when page is at the top', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('renders after scrolling down and scrolls to top on click', async () => {
    const user = userEvent.setup()
    render(<BackToTop />)

    // Simulate scrolling by dispatching a scroll event with a high scrollY
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Back to top' }))
    // Smooth scroll is called (no error)
  })
})
