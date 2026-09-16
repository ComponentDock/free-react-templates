import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AboutDonation } from './AboutDonation'

describe('AboutDonation', () => {
  it('renders the donation form fields', () => {
    render(<AboutDonation />)
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Select Causes/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Donate Now/i })).toBeInTheDocument()
  })

  it('renders payment method radio buttons', () => {
    render(<AboutDonation />)
    expect(screen.getByLabelText(/Bank Transfer/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Credit Card/i)).toBeInTheDocument()
  })

  it('renders welcome text and stats', () => {
    render(<AboutDonation />)
    expect(screen.getByText('Welcome to Mercy')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Trusted Funds')).toBeInTheDocument()
    expect(screen.getByText('Happy Families')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('allows filling form fields, switching payment methods, and submitting', async () => {
    const user = userEvent.setup()
    render(<AboutDonation />)

    await user.type(screen.getByLabelText(/Full Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.selectOptions(screen.getByLabelText(/Select Causes/i), 'Health')
    await user.type(screen.getByLabelText(/Amount/i), '100')
    // Switch to Credit Card first, then back to Bank Transfer to exercise both onChange handlers
    await user.click(screen.getByLabelText(/Credit Card/i))
    await user.click(screen.getByLabelText(/Bank Transfer/i))

    await user.click(screen.getByRole('button', { name: /Donate Now/i }))
    expect(screen.getByText(/Thank you for your donation/i)).toBeInTheDocument()
  })
})
