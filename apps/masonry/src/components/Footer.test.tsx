import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    for (const heading of ['Company', 'Support', 'Legal']) {
      expect(within(footer).getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(within(footer).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })

  it('renders the recent blog posts heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Recent Blog Posts/i })).toBeInTheDocument()
  })

  it('renders social links and the copyright line', () => {
    render(<Footer />)
    for (const name of ['Facebook', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Masonry\. All rights reserved/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Astral/i)).toBeInTheDocument()
  })

  it('clears the email field when the newsletter form is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/email address/i)
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
