import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, features links, and copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
    for (const feature of [
      'About Us',
      'Testimonials',
      'Terms of Service',
      'Privacy',
      'Contact Us',
    ]) {
      expect(screen.getAllByRole('link', { name: feature }).length).toBeGreaterThan(0)
    }
    expect(screen.getByText(/© 2026 Lintel/i)).toBeInTheDocument()
  })

  it('renders social links for Facebook, X, LinkedIn, and Instagram', () => {
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
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
