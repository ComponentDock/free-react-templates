import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConsultationForm } from './ConsultationForm'

describe('ConsultationForm', () => {
  it('renders the section heading', () => {
    render(<ConsultationForm />)
    expect(screen.getByRole('heading', { name: /free consultation/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ConsultationForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit now/i })).toBeInTheDocument()
  })

  it('renders practice area options', () => {
    render(<ConsultationForm />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('Vehicle Accident')).toBeInTheDocument()
    expect(screen.getByText('Health Law')).toBeInTheDocument()
    expect(screen.getByText('Insurance Law')).toBeInTheDocument()
    expect(screen.getByText('Bankruptcy')).toBeInTheDocument()
  })

  it('shows success message on form submission', async () => {
    const user = userEvent.setup()
    render(<ConsultationForm />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    await user.selectOptions(screen.getByRole('combobox'), 'health-law')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Need help')
    await user.click(screen.getByRole('button', { name: /submit now/i }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /submit now/i })).not.toBeInTheDocument()
  })
})
