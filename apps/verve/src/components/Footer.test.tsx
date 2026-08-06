import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, newsletter, social links, and copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: /Quick Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Contact Information/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Newsletter/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/© \d{4} Verve\. All rights reserved\./)).toBeInTheDocument()
  })

  it('subscribes with the newsletter form and clears the input', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Footer />)

    const input = screen.getByLabelText(/Email address/i)
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(input).toHaveValue('')
  })
})
