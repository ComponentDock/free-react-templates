import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders with correct title', () => {
    render(<App />)
    expect(screen.getByText('Sign Up To Financial')).toBeInTheDocument()
  })

  it('shows description below heading', () => {
    render(<App />)
    expect(screen.getByText('Fill all form field to go next step')).toBeInTheDocument()
  })

  it('shows step 1 as active initially', () => {
    render(<App />)
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('validates step 1 fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('First Name is required')).toBeInTheDocument()
    expect(screen.getByText('Last Name is required')).toBeInTheDocument()
    expect(screen.getByText('Address is required')).toBeInTheDocument()
    expect(screen.getByText('Zip Code is required')).toBeInTheDocument()
    expect(screen.getByText('Phone Number is required')).toBeInTheDocument()
  })

  it('advances to step 2 when step 1 validation passes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Do you have an account?')).toBeInTheDocument()
  })

  it('validates step 2 fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // On step 2, click Next with empty fields
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Confirm Password is required')).toBeInTheDocument()
  })

  it('validates password mismatch on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Fill step 2 with mismatched passwords
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass1')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass2')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('advances to step 3 when step 2 validation passes', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Fill step 2
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('More About Yourself')).toBeInTheDocument()
  })

  it('validates step 3 fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 3
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // On step 3, click Next with empty fields
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('First Name is required')).toBeInTheDocument()
    expect(screen.getByText('Last Name is required')).toBeInTheDocument()
    expect(screen.getByText('Position is required')).toBeInTheDocument()
    expect(screen.getByText('Business Area is required')).toBeInTheDocument()
    expect(screen.getByText('DOB Day is required')).toBeInTheDocument()
    expect(screen.getByText('DOB Month is required')).toBeInTheDocument()
    expect(screen.getByText('DOB Year is required')).toBeInTheDocument()
  })

  it('advances to step 4 when step 3 validation passes', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 3
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Fill step 3
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Financing Information')).toBeInTheDocument()
  })

  it('validates step 4 fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Navigate to step 4
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // On step 4, click Submit without filling inventory
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('Buy Inventory is required')).toBeInTheDocument()
  })

  it('completes the full wizard', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Step 1
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Step 2
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Step 3
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Step 4
    await user.selectOptions(screen.getByLabelText('Buy Inventory'), 'new')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    // Should stay on step 4 (no step 5)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('navigates back with Previous button', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Go to step 3
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // On step 3, click Previous to go back to step 2
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByText('Do you have an account?')).toBeInTheDocument()
  })

  it('does not go below step 1', () => {
    render(<App />)
    // On step 1, Previous should not exist
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument()
  })

  it('clears errors when typing in form fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Trigger validation errors
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('First Name is required')).toBeInTheDocument()
    // Type in a field to clear errors
    await user.type(screen.getByLabelText('First Name'), 'J')
    expect(screen.queryByText('First Name is required')).not.toBeInTheDocument()
  })

  it('clears errors when navigating back', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Trigger step 2 validation errors
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    // Navigate back to step 1
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('navigates from step 4 back to step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 4
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // On step 4, click Previous to go back to step 3
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByRole('heading', { name: 'More About Yourself' })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows radio options on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 2
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Existing')).toBeInTheDocument()
    expect(screen.getByText('Newbie')).toBeInTheDocument()
  })

  it('shows DOB dropdowns on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 3
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByLabelText('Day')).toBeInTheDocument()
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Year')).toBeInTheDocument()
  })

  it('shows financing fields on step 4', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 4
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByLabelText('Buy Inventory')).toBeInTheDocument()
    expect(screen.getByLabelText('Business Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Current Balance')).toBeInTheDocument()
  })

  it('clears errors when selecting dropdown on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 3
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Trigger step 3 validation errors
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByText('Position is required')).toBeInTheDocument()
    // Select a position to clear errors
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    expect(screen.queryByText('Position is required')).not.toBeInTheDocument()
  })

  it('clears errors when selecting dropdown on step 4', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Go to step 4
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Address'), '123 Main St')
    await user.type(screen.getByLabelText('Zip Code'), '10001')
    await user.type(screen.getByLabelText('Phone Number'), '555-1234')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Smith')
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    await user.selectOptions(screen.getByLabelText('Business Area'), 'sales')
    await user.selectOptions(screen.getByLabelText('Day'), '15')
    await user.selectOptions(screen.getByLabelText('Month'), '6')
    await user.selectOptions(screen.getByLabelText('Year'), '1990')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Trigger step 4 validation errors
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('Buy Inventory is required')).toBeInTheDocument()
    // Select inventory to clear errors
    await user.selectOptions(screen.getByLabelText('Buy Inventory'), 'new')
    expect(screen.queryByText('Buy Inventory is required')).not.toBeInTheDocument()
  })
})
