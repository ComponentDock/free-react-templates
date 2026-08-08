import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, social links, newsletter, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(/Learn to love learning and growth/i)).toBeInTheDocument()
    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(2)
    }
    expect(screen.getByRole('textbox', { name: /Email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Maison/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Loaft/i)).toBeInTheDocument()
  })

  it('submits the newsletter form without reloading and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
