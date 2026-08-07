import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    for (const heading of ['Top Products', 'Quick Links', 'Features', 'Resources']) {
      expect(within(footer).getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(within(footer).getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    expect(
      within(footer).getAllByRole('link', { name: 'Terms of Service' }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('renders the newsletter form and subscribes', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByPlaceholderText('Your Email Address')
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('renders social links and the copyright line', () => {
    render(<Footer />)

    for (const name of ['Facebook', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Facade\. All rights reserved/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Arclabs/i)).toBeInTheDocument()
  })
})
