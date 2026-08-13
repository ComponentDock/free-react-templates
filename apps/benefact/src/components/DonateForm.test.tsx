import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DonateForm } from './DonateForm'

describe('DonateForm', () => {
  it('renders the form with Name, Email and Amount fields', () => {
    render(<DonateForm />)
    expect(screen.getByRole('heading', { level: 3, name: 'Donate Now' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Amount in dollar')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('blocks submission with per-field validation errors', async () => {
    const user = userEvent.setup()
    render(<DonateForm />)
    await user.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Enter an amount greater than zero')).toBeInTheDocument()
    expect(
      screen.queryByText('Thank you! Your donation makes a difference.'),
    ).not.toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<DonateForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Amount in dollar'), '50')
    await user.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Thank you! Your donation makes a difference.'),
    ).not.toBeInTheDocument()
  })

  it('clears a field error while the user types', async () => {
    const user = userEvent.setup()
    render(<DonateForm />)
    await user.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Name'), 'Jane')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<DonateForm />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Amount in dollar'), '50')
    await user.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByText('Thank you! Your donation makes a difference.')).toBeInTheDocument()
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
  })
})
