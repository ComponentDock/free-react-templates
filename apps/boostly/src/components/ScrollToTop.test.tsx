import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  it('renders the fixed back-to-top button', () => {
    render(<ScrollToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('fixed')
    expect(button.className).toContain('bg-brand')
  })

  it('scrolls the window to the top when clicked', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    render(<ScrollToTop />)
    await user.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
    scrollTo.mockRestore()
  })
})
