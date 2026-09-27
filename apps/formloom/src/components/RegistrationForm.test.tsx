import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Student Registration Form')
  })

  it('renders all form fields with labels', () => {
    render(<RegistrationForm />)
    // Use exact labels to avoid ambiguity
    expect(screen.getByLabelText('Name :')).toBeInTheDocument()
    expect(screen.getByLabelText('Father Name :')).toBeInTheDocument()
    expect(screen.getByLabelText('Address :')).toBeInTheDocument()
    expect(screen.getByLabelText('State :')).toBeInTheDocument()
    expect(screen.getByLabelText('City :')).toBeInTheDocument()
    expect(screen.getByLabelText('DOB :')).toBeInTheDocument()
    expect(screen.getByLabelText('Pincode :')).toBeInTheDocument()
    expect(screen.getByLabelText('Course :')).toBeInTheDocument()
    expect(screen.getByLabelText('Email ID :')).toBeInTheDocument()
  })

  it('renders gender radio buttons', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('radio', { name: 'Male' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Female' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Male' })).toBeChecked()
  })

  it('renders Reset All and Submit Form buttons', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /reset all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit form/i })).toBeInTheDocument()
  })

  it('shows a student image', () => {
    render(<RegistrationForm />)
    const img = screen.getByRole('img', { name: /students/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
  })

  it('shows success message after form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    // Fill required name field first
    await user.type(screen.getByLabelText('Name :'), 'Alice')
    await user.click(screen.getByRole('button', { name: /submit form/i }))
    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })

  it('hides the form after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText('Name :'), 'Alice')
    await user.click(screen.getByRole('button', { name: /submit form/i }))
    expect(screen.queryByLabelText('Name :')).not.toBeInTheDocument()
  })

  it('shows Submit Another button after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText('Name :'), 'Alice')
    await user.click(screen.getByRole('button', { name: /submit form/i }))
    expect(screen.getByRole('button', { name: /submit another/i })).toBeInTheDocument()
  })

  it('allows switching gender selection', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    expect(screen.getByRole('radio', { name: 'Male' })).toBeChecked()
    await user.click(screen.getByRole('radio', { name: 'Female' }))
    expect(screen.getByRole('radio', { name: 'Female' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Male' })).not.toBeChecked()

    // Click Male again to cover the male onChange handler
    await user.click(screen.getByRole('radio', { name: 'Male' }))
    expect(screen.getByRole('radio', { name: 'Male' })).toBeChecked()
  })

  it('resets the form when Reset All is clicked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /reset all/i }))
    // Form should still be visible
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Student Registration Form')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText('Name :'), 'Alice')
    await user.click(screen.getByRole('button', { name: /submit form/i }))
    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })

  it('has the correct number of input/select elements before submit', () => {
    render(<RegistrationForm />)
    // name, father-name, address, gender(male), gender(female), state, city, dob, pincode, course, email = 11
    const inputs = document.querySelectorAll('input, select')
    expect(inputs).toHaveLength(11)
  })

  it('allows submitting another registration after success', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByLabelText('Name :'), 'Alice')
    await user.click(screen.getByRole('button', { name: /submit form/i }))
    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /submit another/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Student Registration Form')
    expect(screen.getByLabelText('Name :')).toBeInTheDocument()
  })
})
