import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the form wizard heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('FORM WIZARD')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Wizardry — Multi-Step Form Wizard Template')
  })

  it('renders step 1 (Account Setup) by default', () => {
    render(<App />)
    // Step name appears in both sidebar and form header
    expect(screen.getAllByText('Account Setup').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows validation errors when clicking Next with empty fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Next'))

    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Please confirm your password')).toBeInTheDocument()
  })

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'invalid')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('shows password mismatch error', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass456')
    await user.click(screen.getByText('Next'))

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('advances to step 2 when step 1 is valid', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    // Step name appears in both sidebar and form header
    expect(screen.getAllByText('Billing Setup').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByLabelText('Card Holder Name')).toBeInTheDocument()
  })

  it('advances to step 3 when step 2 is valid', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    // Step 2
    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4224-3228-6160-5079')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '12/2025')
    await user.click(screen.getByText('Next'))

    // Step 3 - step name appears in both sidebar and form header
    expect(screen.getAllByText('Agreement').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('I read agreement and I have not any objection.')).toBeInTheDocument()
  })

  it('shows success screen after completing all steps', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    // Step 2
    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4224-3228-6160-5079')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '12/2025')
    await user.click(screen.getByText('Next'))

    // Step 3 - accept agreement
    await user.click(
      screen.getByRole('checkbox', {
        name: /I read agreement and I have not any objection/i,
      }),
    )
    await user.click(screen.getByText('Submit'))

    expect(screen.getByText('Complete!')).toBeInTheDocument()
    expect(screen.getByText('Registration Complete')).toBeInTheDocument()
  })

  it('resets the wizard when Start Over is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete all steps
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4224-3228-6160-5079')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '12/2025')
    await user.click(screen.getByText('Next'))

    await user.click(
      screen.getByRole('checkbox', {
        name: /I read agreement and I have not any objection/i,
      }),
    )
    await user.click(screen.getByText('Submit'))

    // Reset
    await user.click(screen.getByText('Start Over'))
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('allows navigating back to previous steps', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Go to step 2
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))
    // Step name appears in both sidebar and form header
    expect(screen.getAllByText('Billing Setup').length).toBeGreaterThanOrEqual(1)

    // Go back
    await user.click(screen.getByText('Back'))
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('does not show Back button on first step', () => {
    render(<App />)
    expect(screen.queryByText('Back')).not.toBeInTheDocument()
  })

  it('shows Submit button on last step', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4224-3228-6160-5079')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '12/2025')
    await user.click(screen.getByText('Next'))

    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('shows agreement error when submitting without checking', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    // Step 2
    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4224-3228-6160-5079')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '12/2025')
    await user.click(screen.getByText('Next'))

    // Step 3 - don't check agreement
    await user.click(screen.getByText('Submit'))
    expect(screen.getByText('You must accept the agreement')).toBeInTheDocument()
  })

  it('shows billing validation errors when step 2 fields are empty', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1 valid
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')
    await user.click(screen.getByText('Next'))

    // Step 2 - empty
    await user.click(screen.getByText('Next'))
    expect(screen.getByText('Card holder name is required')).toBeInTheDocument()
    expect(screen.getByText('Card number is required')).toBeInTheDocument()
    expect(screen.getByText('CVC is required')).toBeInTheDocument()
    expect(screen.getByText('Expiration date is required')).toBeInTheDocument()
  })
})
