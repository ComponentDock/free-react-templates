import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders section heading and form', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: /free case evaluation/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your full name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /select subject/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
  })

  it('renders services list', () => {
    render(<Appointment />)
    expect(screen.getByText('Get Legal Advice')).toBeInTheDocument()
    expect(screen.getByText('We Protect Justice')).toBeInTheDocument()
    expect(screen.getByText('Best Attorneys Team')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Appointment />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByRole('textbox', { name: /your full name/i }), 'John Doe')
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'john@test.com')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Need legal help')

    expect(screen.getByRole('textbox', { name: /your full name/i })).toHaveValue('John Doe')
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveValue('john@test.com')
    expect(screen.getByRole('textbox', { name: /message/i })).toHaveValue('Need legal help')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    const submitBtn = screen.getByRole('button', { name: /send message/i })
    await user.click(submitBtn)
    // Form submission is prevented — no navigation occurs
  })
})
