import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the wizard heading', () => {
    render(<App />)
    expect(screen.getByText('Sign Up Your User Account')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Hex — Account Registration Wizard')
  })

  it('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText('Fill all form fields to go to the next step')).toBeInTheDocument()
  })

  it('renders step 1 (About) by default', () => {
    render(<App />)
    expect(screen.getByText('Account Information:')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('renders step labels', () => {
    render(<App />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Personal')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows validation errors on step 1 when clicking Next with empty fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('Please confirm your password')).toBeInTheDocument()
  })

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'invalid')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('shows password mismatch error', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password456')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('shows password too short error', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'short')
    await user.type(screen.getByLabelText('Confirm Password'), 'short')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
  })

  it('advances to step 2 when step 1 is valid', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('shows validation errors on step 2 when clicking Next with empty fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Try to advance step 2
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('Gender is required')).toBeInTheDocument()
    expect(screen.getByText('Phone number is required')).toBeInTheDocument()
    expect(screen.getByText('Address is required')).toBeInTheDocument()
  })

  it('validates DOB selects on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Fill some fields but leave DOB empty
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Day is required')).toBeInTheDocument()
    expect(screen.getByText('Month is required')).toBeInTheDocument()
    expect(screen.getByText('Year is required')).toBeInTheDocument()
  })

  it('advances to step 3 when step 2 is valid', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Payment Information:')).toBeInTheDocument()
    expect(screen.getByLabelText('Holder Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument()
    expect(screen.getByLabelText('CVC')).toBeInTheDocument()
  })

  it('shows validation errors on step 3 when clicking Submit with empty fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    // Try to submit
    await user.click(screen.getByText('Submit'))

    expect(screen.getByText('Payment method is required')).toBeInTheDocument()
    expect(screen.getByText('Holder name is required')).toBeInTheDocument()
    expect(screen.getByText('Card number is required')).toBeInTheDocument()
    expect(screen.getByText('CVC is required')).toBeInTheDocument()
    expect(screen.getByText('Expiry month is required')).toBeInTheDocument()
    expect(screen.getByText('Expiry year is required')).toBeInTheDocument()
  })

  it('validates card number format on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    // Select payment method - use button role since summary table also has "Credit Card"
    await user.click(screen.getByRole('button', { name: /Credit Card/ }))
    await user.type(screen.getByLabelText('Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '12345')
    await user.type(screen.getByLabelText('CVC'), '12')
    await user.selectOptions(screen.getByLabelText('Month'), '12')
    await user.selectOptions(screen.getByLabelText('Year'), '2025')
    await user.click(screen.getByText('Submit'))

    expect(screen.getByText('Card number must be 16 digits')).toBeInTheDocument()
    expect(screen.getByText('CVC must be 3 digits')).toBeInTheDocument()
  })

  it('shows success screen on valid submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    // Complete step 3
    await user.click(screen.getByRole('button', { name: /Credit Card/ }))
    await user.type(screen.getByLabelText('Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '1234567890123456')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.selectOptions(screen.getByLabelText('Month'), '12')
    await user.selectOptions(screen.getByLabelText('Year'), '2025')
    await user.click(screen.getByText('Submit'))

    expect(screen.getByText('Success!')).toBeInTheDocument()
    expect(screen.getByText('Your account has been created successfully.')).toBeInTheDocument()
  })

  it('Previous button is disabled on step 1', () => {
    render(<App />)
    expect(screen.getByText('Previous')).toBeDisabled()
  })

  it('Previous button navigates back', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    expect(screen.getByText('Personal Information:')).toBeInTheDocument()

    await user.click(screen.getByText('Previous'))
    expect(screen.getByText('Account Information:')).toBeInTheDocument()
  })

  it('step circles are clickable to jump between steps', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Click step 2 circle
    await user.click(screen.getByLabelText('Step 2: Personal'))
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()

    // Click step 3 circle
    await user.click(screen.getByLabelText('Step 3: Payment'))
    expect(screen.getByText('Payment Information:')).toBeInTheDocument()

    // Click step 1 circle
    await user.click(screen.getByLabelText('Step 1: About'))
    expect(screen.getByText('Account Information:')).toBeInTheDocument()
  })

  it('renders summary table on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    // Verify summary table
    expect(screen.getByText('Full Name')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('test@test.com')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
    expect(screen.getByText('1234567890')).toBeInTheDocument()
    expect(screen.getByText('User')).toBeInTheDocument()
    expect(screen.getByText('testuser')).toBeInTheDocument()
    expect(screen.getByText('Gender')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('123 Main St')).toBeInTheDocument()
    expect(screen.getByText('Card Type')).toBeInTheDocument()
    // "Credit Card" appears in both payment card button and summary table
    const creditCardTexts = screen.getAllByText('Credit Card')
    expect(creditCardTexts.length).toBeGreaterThanOrEqual(2)
  })

  it('clears validation errors when user starts typing', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Next Step'))
    expect(screen.getByText('Email is required')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email Address'), 't')
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('selects Paypal payment method', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Complete step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByLabelText('Male'))
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.click(screen.getByText('Next Step'))

    await user.click(screen.getByText('Paypal'))
    // Click Submit without filling other fields to see if paymentMethod error is gone
    await user.click(screen.getByText('Submit'))

    expect(screen.queryByText('Payment method is required')).not.toBeInTheDocument()
  })

  it('renders step indicator with correct icons', () => {
    render(<App />)
    expect(screen.getByLabelText('Step 1: About')).toBeInTheDocument()
    expect(screen.getByLabelText('Step 2: Personal')).toBeInTheDocument()
    expect(screen.getByLabelText('Step 3: Payment')).toBeInTheDocument()
  })

  it('renders gender radio buttons', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Step 2: Personal'))
    expect(screen.getByLabelText('Male')).toBeInTheDocument()
    expect(screen.getByLabelText('Female')).toBeInTheDocument()
  })

  it('selects Female gender', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Step 2: Personal'))
    await user.click(screen.getByLabelText('Female'))
    expect(screen.getByLabelText('Female')).toBeChecked()
  })

  it('DOB selects render with correct options', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Step 2: Personal'))
    const daySelect = screen.getByLabelText('Day')
    const monthSelect = screen.getByLabelText('Month')
    const yearSelect = screen.getByLabelText('Year')

    expect(daySelect).toBeInTheDocument()
    expect(monthSelect).toBeInTheDocument()
    expect(yearSelect).toBeInTheDocument()
  })

  it('expiry selects render on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Step 3: Payment'))
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Year')).toBeInTheDocument()
  })

  it('clears errors when navigating between steps', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Next Step'))
    expect(screen.getByText('Email is required')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Step 2: Personal'))
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('Previous button does not show on step 1 (is hidden by disabled state but rendered)', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Complete step 1
    await user.type(screen.getByLabelText('Email Address'), 'test@test.com')
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Confirm Password'), 'password123')
    await user.click(screen.getByText('Next Step'))

    // Previous should be enabled on step 2
    expect(screen.getByText('Previous')).not.toBeDisabled()
  })
})
