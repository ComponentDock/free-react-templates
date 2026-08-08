import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter form, social links, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()

    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Elevation/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Buildarch/i)).toBeInTheDocument()
  })

  it('clears the email field after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'architect@example.com')
    expect(input).toHaveValue('architect@example.com')

    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
