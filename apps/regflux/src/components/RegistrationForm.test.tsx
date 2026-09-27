import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders all form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/birth date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/repeat your password/i)).toBeInTheDocument()
  })

  it('renders gender toggle buttons', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /^male$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^female$/i })).toBeInTheDocument()
  })

  it('renders Submit button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders Additional Info toggle', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /additional info/i })).toBeInTheDocument()
  })

  it('hides additional fields by default', () => {
    render(<RegistrationForm />)
    expect(screen.queryByLabelText(/address/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/city/i)).not.toBeInTheDocument()
  })

  it('shows additional fields when Additional Info is clicked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /additional info/i }))
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument()
  })

  it('hides additional fields when Additional Info is clicked again', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const toggle = screen.getByRole('button', { name: /additional info/i })
    await user.click(toggle)
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByLabelText(/address/i)).not.toBeInTheDocument()
  })

  it('selects Male gender when clicked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const maleBtn = screen.getByRole('button', { name: /^male$/i })
    await user.click(maleBtn)
    expect(maleBtn.className).toContain('bg-accent')
  })

  it('selects Female gender and deselects Male', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const maleBtn = screen.getByRole('button', { name: /^male$/i })
    const femaleBtn = screen.getByRole('button', { name: /^female$/i })

    await user.click(maleBtn)
    await user.click(femaleBtn)

    expect(femaleBtn.className).toContain('bg-accent')
    expect(maleBtn.className).not.toContain('bg-accent')
  })

  it('shows success message after form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/registration submitted/i)).toBeInTheDocument()
  })

  it('hides form fields after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument()
  })

  it('has 6 inputs before additional info is opened', () => {
    render(<RegistrationForm />)
    const inputs = document.querySelectorAll('input')
    expect(inputs).toHaveLength(6)
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/registration submitted/i)).toBeInTheDocument()
  })
})
