import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DonationForm } from './DonationForm'

describe('DonationForm', () => {
  it('renders the heading and description', () => {
    render(<DonationForm />)
    expect(screen.getByText('Pure Water Is More Essential')).toBeInTheDocument()
    expect(screen.getByText('Make a Donation')).toBeInTheDocument()
  })

  it('renders donation amount buttons', () => {
    render(<DonationForm />)
    expect(screen.getByRole('button', { name: '$25' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '$50' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '$100' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '$200' })).toBeInTheDocument()
  })

  it('renders name and email inputs', () => {
    render(<DonationForm />)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<DonationForm />)
    expect(screen.getByRole('button', { name: /donate now/i })).toBeInTheDocument()
  })

  it('handles amount selection', async () => {
    const user = userEvent.setup()
    render(<DonationForm />)
    await user.click(screen.getByRole('button', { name: '$50' }))
    expect(screen.getByRole('button', { name: '$50' })).toHaveClass('bg-primary')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<DonationForm />)
    await user.type(screen.getByLabelText('Your name'), 'John Doe')
    await user.type(screen.getByLabelText('Your email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /donate now/i }))
  })
})
