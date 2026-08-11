import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'
import { backToTopLabel } from '../data'

describe('BackToTop', () => {
  it('renders a back-to-top button with an accessible label', () => {
    render(<BackToTop />)
    expect(screen.getByRole('button', { name: backToTopLabel })).toBeInTheDocument()
  })

  it('scrolls to the top when pressed', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    render(<BackToTop />)

    await user.click(screen.getByRole('button', { name: backToTopLabel }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
