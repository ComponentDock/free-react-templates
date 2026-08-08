import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Me, Newsletter, and Follow Me columns with a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Follow Me/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Cantilever/i)).toBeInTheDocument()
  })

  it('renders social links for Facebook, X, Instagram, and LinkedIn', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('submits the newsletter form without a page reload and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email address/i)
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
