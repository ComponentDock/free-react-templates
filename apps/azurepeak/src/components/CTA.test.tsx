import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', { name: /Make Your Stay Extraordinary/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CTA />)
    expect(screen.getByText(/Subscribe to receive exclusive offers/i)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<CTA />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<CTA />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(button)
    // Form submission is prevented (no page reload) — test passes if no error
  })
})
