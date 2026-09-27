import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the Registration Info heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Registration Info')
  })

  it('renders all form fields with labels', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/birthdate/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/class/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/registration code/i)).toBeInTheDocument()
  })

  it('renders a Submit button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows a city skyline image with grayscale filter', () => {
    render(<RegistrationForm />)
    const img = screen.getByRole('img', { name: /city skyline/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
    expect(img.className).toContain('grayscale')
  })

  it('shows success message after form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })

  it('hides the form after submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument()
  })

  it('has the correct number of input/select elements before submit', () => {
    render(<RegistrationForm />)
    // name text, birthdate date, gender select, class select, reg-code text = 5
    const inputs = document.querySelectorAll('input, select')
    expect(inputs).toHaveLength(5)
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    // The form should not navigate away — we verify by checking success message appears
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/registration submitted successfully/i)).toBeInTheDocument()
  })
})
