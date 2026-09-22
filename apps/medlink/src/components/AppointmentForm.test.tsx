import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  beforeEach(() => {
    render(<AppointmentForm />)
  })

  it('renders the heading', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: /book an appointment/i }),
    ).toBeInTheDocument()
  })

  it('renders all form fields with labels', () => {
    expect(screen.getByLabelText(/patient name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/disease type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/appointment date/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('has the #appointment id for hash navigation', () => {
    expect(document.getElementById('appointment')).toBeInTheDocument()
  })

  it('allows typing into the Patient Name field', async () => {
    const user = userEvent.setup()
    const nameInput = screen.getByLabelText(/patient name/i)
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('allows selecting a disease type from the dropdown', async () => {
    const user = userEvent.setup()
    const select = screen.getByLabelText(/disease type/i)
    await user.selectOptions(select, 'Cardiology')
    expect(select).toHaveValue('Cardiology')
  })

  it('prevents default form submission', () => {
    const { container } = render(<AppointmentForm />)
    const form = container.querySelector('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    const preventSpy = vi.spyOn(event, 'preventDefault')
    form.dispatchEvent(event)
    expect(preventSpy).toHaveBeenCalled()
  })
})
