import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WizardCard, validatestep } from './WizardCard'

describe('WizardCard', () => {
  it('renders step 1 with Personal fields', () => {
    render(<WizardCard />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/user name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders step tiles', () => {
    render(<WizardCard />)
    expect(screen.getAllByRole('tab')).toHaveLength(4)
  })

  it('renders step 1 legend', () => {
    render(<WizardCard />)
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
    expect(screen.getByText('Step 1 / 4')).toBeInTheDocument()
  })

  it('shows Next button on step 1', () => {
    render(<WizardCard />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('hides Previous button on step 1', () => {
    render(<WizardCard />)
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
  })

  it('blocks advancement when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Still on step 1
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
  })

  it('shows error icons when advancing with empty fields', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts.length).toBeGreaterThan(0)
  })

  it('advances to step 2 when all required fields are filled', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill step 1 required fields
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Now on step 2
    expect(screen.getByText('Contact Information:')).toBeInTheDocument()
    expect(screen.getByText('Step 2 / 4')).toBeInTheDocument()
  })

  it('shows Previous button on step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
  })

  it('navigates back to step 1', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Contact Information:')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
  })

  it('allows clicking visited tiles to navigate', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill step 1 and advance
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Click step 1 tile to go back
    await user.click(screen.getByRole('tab', { name: /personal/i }))
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
  })

  it('renders step 2 Contact fields', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument()
  })

  it('renders step 3 Official fields', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Step 1
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 2
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 3
    expect(screen.getByLabelText(/employee id/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/designation/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/department/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/working hours/i)).toBeInTheDocument()
  })

  it('renders step 4 Payment fields', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Step 1
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 2
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 3
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 4
    expect(screen.getByLabelText(/bank name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/holder name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/card number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows success panel after submit', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill all steps
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/bank name/i), 'Chase')
    await user.type(screen.getByLabelText(/holder name/i), 'John Doe')
    await user.type(screen.getByLabelText(/card number/i), '4111111111111111')
    await user.type(screen.getByLabelText(/cvc/i), '123')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Account Created')).toBeInTheDocument()
  })

  it('blocks submit when step 4 fields are empty', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill steps 1-3
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 4 — try to submit with empty fields
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Payment Information:')).toBeInTheDocument()
  })

  it('clears error on field change', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Trigger errors
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
    // Type in first name to clear that error
    await user.type(screen.getByLabelText(/first name/i), 'J')
    // The error for firstName should be cleared
    const alerts = screen.getAllByRole('alert')
    expect(alerts.length).toBeLessThan(4) // one error cleared
  })

  it('validates field on blur', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Tab through required fields without typing
    await user.click(screen.getByLabelText(/first name/i))
    await user.tab() // blur first name
    // Error should appear for firstName
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders DateGroup in step 1', () => {
    render(<WizardCard />)
    expect(screen.getByLabelText(/day/i, { selector: 'select' })).toBeInTheDocument()
    expect(screen.getByLabelText(/month/i, { selector: 'select' })).toBeInTheDocument()
    expect(screen.getByLabelText(/year/i, { selector: 'select' })).toBeInTheDocument()
  })

  it('renders Gender custom dropdown in step 1', () => {
    render(<WizardCard />)
    expect(screen.getByText('Gender')).toBeInTheDocument()
  })

  it('renders Country custom dropdown in step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Country')).toBeInTheDocument()
  })

  it('renders Payment type custom dropdown in step 4', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill all steps
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Payment type')).toBeInTheDocument()
  })

  it('renders DateGroup in step 4 for expiry', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill all steps
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Step 4 has two sets of Day/Month/Year — one for expiry
    const daySelects = screen.getAllByLabelText(/day/i, { selector: 'select' })
    expect(daySelects.length).toBeGreaterThanOrEqual(1)
  })

  it('selects Country in step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Open Country dropdown and select America
    await user.click(screen.getByRole('button', { name: /country/i }))
    await user.click(screen.getByRole('option', { name: /america/i }))
    expect(screen.getByRole('button', { name: /country/i })).toHaveTextContent('America')
  })

  it('selects Payment type in step 4', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Open Payment type dropdown and select Visa Card
    await user.click(screen.getByRole('button', { name: /payment type/i }))
    await user.click(screen.getByRole('option', { name: /visa card/i }))
    expect(screen.getByRole('button', { name: /payment type/i })).toHaveTextContent('Visa Card')
  })

  it('selects expiry date in step 4', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '1234567890')
    await user.type(screen.getByLabelText(/address/i), '123 Main St')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/employee id/i), 'E001')
    await user.type(screen.getByLabelText(/designation/i), 'Engineer')
    await user.type(screen.getByLabelText(/department/i), 'Tech')
    await user.type(screen.getByLabelText(/working hours/i), '40')
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Select expiry date
    const daySelects = screen.getAllByLabelText(/day/i, { selector: 'select' })
    const monthSelects = screen.getAllByLabelText(/month/i, { selector: 'select' })
    const yearSelects = screen.getAllByLabelText(/year/i, { selector: 'select' })
    // Use the second set (expiry) if available, otherwise the first
    const dayIdx = daySelects.length > 1 ? 1 : 0
    await user.selectOptions(daySelects[dayIdx]!, '15')
    await user.selectOptions(monthSelects[dayIdx]!, 'Jun')
    await user.selectOptions(yearSelects[dayIdx]!, '2025')
    expect(daySelects[dayIdx]).toHaveValue('15')
  })

  it('selects Gender in step 1', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Open Gender dropdown and select Female
    await user.click(screen.getByRole('button', { name: /gender/i }))
    await user.click(screen.getByRole('option', { name: /female/i }))
    expect(screen.getByRole('button', { name: /gender/i })).toHaveTextContent('Female')
  })

  it('selects birth date in step 1', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    const daySelect = screen.getByLabelText(/day/i, { selector: 'select' })
    const monthSelect = screen.getByLabelText(/month/i, { selector: 'select' })
    const yearSelect = screen.getByLabelText(/year/i, { selector: 'select' })
    await user.selectOptions(daySelect, '15')
    await user.selectOptions(monthSelect, 'Jun')
    await user.selectOptions(yearSelect, '1990')
    expect(daySelect).toHaveValue('15')
    expect(monthSelect).toHaveValue('Jun')
    expect(yearSelect).toHaveValue('1990')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const { container } = render(<WizardCard />)
    // Fill step 1
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/user name/i), 'johndoe')
    await user.type(screen.getByLabelText(/password/i), 'pass123')
    // Submit the form via Enter key on a field
    await user.type(screen.getByLabelText(/password/i), '{Enter}')
    // Should still be on step 1 (form submit prevented)
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
    // Also trigger form submit directly via the form element
    const form = container.querySelector('form')
    if (form) {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    }
    expect(screen.getByText('Personal Information:')).toBeInTheDocument()
  })
})

describe('validatestep', () => {
  it('returns empty set for invalid step number', () => {
    const data = {
      firstName: '',
      lastName: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      gender: '',
      userName: '',
      password: '',
      email: '',
      phone: '',
      address: '',
      country: '',
      employeeId: '',
      designation: '',
      department: '',
      workHours: '',
      bankName: '',
      holderName: '',
      expiryDay: '',
      expiryMonth: '',
      expiryYear: '',
      paymentType: '',
      cardNumber: '',
      cvc: '',
    }
    const errors = validatestep(99, data)
    expect(errors.size).toBe(0)
  })
})
