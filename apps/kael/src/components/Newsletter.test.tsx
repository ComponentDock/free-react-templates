import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Get Update From Anywhere')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('shows thank-you message on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))

    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('does not submit with empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    // Bypass HTML5 required validation by setting value programmatically
    const input = screen.getByLabelText('Email address')
    await user.click(input)
    // Submit the form directly
    input.closest('form')!.dispatchEvent(new Event('submit', { bubbles: true }))

    // Form should still be visible (not submitted)
    expect(screen.getByText('Get Update From Anywhere')).toBeInTheDocument()
  })

  it('requires email before submitting', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    expect(input).toBeRequired()
  })
})
