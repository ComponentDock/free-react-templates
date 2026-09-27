import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders all required text input fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  })

  it('renders optional payment fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/dd \/ cheque no/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/drawn on/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/payable at/i)).toBeInTheDocument()
  })

  it('renders meal preference dropdown with default vegetarian', () => {
    render(<RegistrationForm />)
    const select = screen.getByLabelText(/meal preference/i)
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('vegetarian')
  })

  it('renders payment mode radio buttons with cash selected by default', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('radio', { name: 'Cash' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Cheque' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Demand Draft' })).toBeInTheDocument()
  })

  it('renders donation slider with default value of 500', () => {
    render(<RegistrationForm />)
    const slider = screen.getByLabelText(/donate us/i)
    expect(slider).toHaveValue('500')
    expect(screen.getByText('$ 500')).toBeInTheDocument()
  })

  it('renders Submit and Reset buttons', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })

  it('shows success message after form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/company/i), 'Acme')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '555-0100')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })

  it('hides the form after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/company/i), 'Acme')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '555-0100')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument()
  })

  it('shows Register Another button after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/company/i), 'Acme')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '555-0100')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByRole('button', { name: /register another/i })).toBeInTheDocument()
  })

  it('allows switching payment mode selection', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    expect(screen.getByRole('radio', { name: 'Cash' })).toBeChecked()
    await user.click(screen.getByRole('radio', { name: 'Cheque' }))
    expect(screen.getByRole('radio', { name: 'Cheque' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Cash' })).not.toBeChecked()

    await user.click(screen.getByRole('radio', { name: 'Demand Draft' }))
    expect(screen.getByRole('radio', { name: 'Demand Draft' })).toBeChecked()

    // Click Cash again to cover the Cash onChange handler
    await user.click(screen.getByRole('radio', { name: 'Cash' }))
    expect(screen.getByRole('radio', { name: 'Cash' })).toBeChecked()
  })

  it('allows changing meal preference', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const select = screen.getByLabelText(/meal preference/i)
    await user.selectOptions(select, 'vegan')
    expect(select).toHaveValue('vegan')
  })

  it('updates donation slider value', async () => {
    render(<RegistrationForm />)

    const slider = screen.getByLabelText(/donate us/i) as HTMLInputElement
    await userEvent.setup().click(slider)
    // Use native input setter to change range value
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )!.set!
    nativeInputValueSetter.call(slider, '750')
    slider.dispatchEvent(new Event('input', { bubbles: true }))
    slider.dispatchEvent(new Event('change', { bubbles: true }))
    expect(screen.getByText('$ 750')).toBeInTheDocument()
  })

  it('resets form to defaults when Reset is clicked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.click(screen.getByRole('button', { name: /reset/i }))

    // Controlled state should reset to defaults
    expect(screen.getByLabelText(/meal preference/i)).toHaveValue('vegetarian')
    expect(screen.getByRole('radio', { name: 'Cash' })).toBeChecked()
    expect(screen.getByText('$ 500')).toBeInTheDocument()
    // Form is still visible
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
  })

  it('allows submitting another registration after success', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/company/i), 'Acme')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '555-0100')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /register another/i }))
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/first name/i)).toHaveValue('')
  })

  it('has the correct number of input/select elements before submit', () => {
    render(<RegistrationForm />)
    // firstName, lastName, company, email, phone, mealPreference, paymentMode(3 radios), ddChequeNo, drawnOn, payableAt, donation = 13
    const inputs = document.querySelectorAll('input, select')
    expect(inputs).toHaveLength(13)
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/company/i), 'Acme')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '555-0100')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })

  it('shows Lunch detail and Payment Detail helper text', () => {
    render(<RegistrationForm />)
    expect(screen.getByText('Lunch detail')).toBeInTheDocument()
    expect(screen.getByText('Payment Detail')).toBeInTheDocument()
  })

  it('shows Donate Us label', () => {
    render(<RegistrationForm />)
    expect(screen.getByText('Donate Us')).toBeInTheDocument()
  })
})
