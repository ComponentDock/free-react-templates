import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, quick links, and working hours', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Buzz/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByText('10:00 am - 10:00 pm')).toBeInTheDocument()
  })

  it('collects a newsletter email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Enter email address')
    await user.type(input, 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thank you for subscribing/)).toBeInTheDocument()
  })

  it('links to the social profiles', () => {
    render(<Footer />)
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/All rights reserved \| Buzz/)).toBeInTheDocument()
  })
})
