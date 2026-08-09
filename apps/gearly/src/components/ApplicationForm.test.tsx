import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApplicationForm } from './ApplicationForm'

describe('ApplicationForm', () => {
  it('shows the section heading and the labeled form fields', () => {
    render(<ApplicationForm />)
    expect(screen.getByRole('heading', { name: /Application Form/i })).toBeInTheDocument()

    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Date & time')).toBeInTheDocument()
    expect(screen.getByLabelText('Courses type')).toBeInTheDocument()
    expect(screen.getByLabelText('Car type')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send inquiry/i })).toBeInTheDocument()
  })

  it('submits client-side and shows a confirmation without reloading', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    await user.type(screen.getByLabelText('Your name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Your Phone'), '5551234')
    await user.type(screen.getByLabelText('Date & time'), '2026-09-01T10:00')
    await user.selectOptions(screen.getByLabelText('Courses type'), 'Safe Driving Courses')
    await user.selectOptions(screen.getByLabelText('Car type'), 'Sedan')

    await user.click(screen.getByRole('button', { name: /Send inquiry/i }))

    expect(screen.getByText(/Thanks, Jane Doe/i)).toBeInTheDocument()
    expect(screen.queryByText(/Please enter your name/i)).not.toBeInTheDocument()
  })

  it('shows per-field errors for an invalid submission', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    await user.click(screen.getByRole('button', { name: /Send inquiry/i }))

    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter your email/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter your phone/i)).toBeInTheDocument()
    expect(screen.queryByText(/Thanks,/i)).not.toBeInTheDocument()
  })

  it('clears a field error as soon as the user starts typing', async () => {
    const user = userEvent.setup()
    render(<ApplicationForm />)

    await user.click(screen.getByRole('button', { name: /Send inquiry/i }))
    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your name'), 'Jane Doe')
    expect(screen.queryByText(/Please enter your name/i)).not.toBeInTheDocument()
  })
})
