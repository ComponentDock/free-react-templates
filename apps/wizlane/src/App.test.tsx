import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the wizard heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Basic Details')
  })

  it('renders the stepper with step labels', () => {
    render(<App />)
    expect(screen.getAllByText('Basic Details').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Shipping')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
  })

  it('renders the Continue button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Wizlane — Food Store Checkout Wizard')
  })

  it('does not show Back button on step 1', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument()
  })

  it('validates required fields on step 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getAllByText('Required').length).toBeGreaterThanOrEqual(1)
  })

  it('validates email format on step 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Email ID'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('advances to step 2 with valid inputs', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Account Security')
  })

  it('navigates back from step 2 to step 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Account Security')
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Basic Details')
  })

  it('preserves values when navigating back', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument()
    expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument()
  })

  it('shows Place Order button on final step', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Fill step 1
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 2
    await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('Confirm Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('New Password'), 'new1')
    await user.type(screen.getByPlaceholderText('Confirm New Password'), 'new1')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 3
    await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.type(screen.getByPlaceholderText('Postal Code'), '90001')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Step 4 should show Place Order
    expect(screen.getByRole('button', { name: /place order/i })).toBeInTheDocument()
  })

  it('shows confirmation after submitting all steps', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Fill step 1
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 2
    await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('Confirm Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('New Password'), 'new1')
    await user.type(screen.getByPlaceholderText('Confirm New Password'), 'new1')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 3
    await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.type(screen.getByPlaceholderText('Postal Code'), '90001')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 4
    await user.type(screen.getByPlaceholderText('Card Number'), '4111111111111111')
    await user.type(screen.getByPlaceholderText('Cardholder Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('MM / YY'), '12/28')
    await user.type(screen.getByPlaceholderText('CVV'), '123')
    await user.click(screen.getByRole('button', { name: /place order/i }))
    // Confirmation
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Order Placed!')
    expect(screen.getByText(/Your order has been successfully placed/)).toBeInTheDocument()
  })

  it('resets wizard after confirmation', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Fill step 1
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.type(screen.getByPlaceholderText('State'), 'CA')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 2
    await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('Confirm Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('New Password'), 'new1')
    await user.type(screen.getByPlaceholderText('Confirm New Password'), 'new1')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 3
    await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St')
    await user.type(screen.getByPlaceholderText('City'), 'LA')
    await user.type(screen.getByPlaceholderText('Postal Code'), '90001')
    await user.type(screen.getByPlaceholderText('Country'), 'US')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    // Fill step 4
    await user.type(screen.getByPlaceholderText('Card Number'), '4111111111111111')
    await user.type(screen.getByPlaceholderText('Cardholder Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('MM / YY'), '12/28')
    await user.type(screen.getByPlaceholderText('CVV'), '123')
    await user.click(screen.getByRole('button', { name: /place order/i }))
    // Click Start New Order
    await user.click(screen.getByRole('button', { name: /start new order/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Basic Details')
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('')
  })
})
