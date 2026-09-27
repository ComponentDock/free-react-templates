import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the form heading and all fields', () => {
    render(<RegistrationForm />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/registration form/i)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Gender')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('shows a thank-you message after successful submission', () => {
    render(<RegistrationForm />)

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } })
    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Male' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'abc123' } })
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'abc123' } })

    fireEvent.submit(screen.getByRole('form'))

    expect(screen.getByRole('heading', { name: /thank you/i })).toBeInTheDocument()
    expect(screen.getByText(/registration has been submitted/i)).toBeInTheDocument()
  })

  it('does not submit when required fields are missing', () => {
    render(<RegistrationForm />)

    fireEvent.submit(screen.getByRole('form'))
    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('shows error when passwords do not match', () => {
    render(<RegistrationForm />)

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } })
    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Male' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'abc123' } })
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'xyz789' } })

    fireEvent.submit(screen.getByRole('form'))

    expect(screen.getByRole('alert')).toHaveTextContent(/passwords do not match/i)
    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('has correct number of select fields', () => {
    render(<RegistrationForm />)
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(1) // Gender only
  })

  it('renders the hero image on desktop', () => {
    const { container } = render(<RegistrationForm />)
    const heroImg = container.querySelector('img[alt="Registration hero"]')
    expect(heroImg).toBeInTheDocument()
    expect(heroImg).toHaveAttribute('src', 'https://picsum.photos/seed/regpilot-hero/600/800')
  })
})
