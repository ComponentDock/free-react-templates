import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the form heading and all form fields', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('allows typing into form fields', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Your Phone'), '555-1234')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Looking forward to class!')

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('Jane Doe')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('jane@example.com')
    expect(screen.getByPlaceholderText('Your Phone')).toHaveValue('555-1234')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('Looking forward to class!')
  })

  it('allows selecting a yoga class', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.selectOptions(screen.getByRole('combobox'), 'vinyasa')
    expect(screen.getByRole('combobox')).toHaveValue('vinyasa')
  })

  it('has a submit button', () => {
    render(<Appointment />)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Test User')
    await user.type(screen.getByPlaceholderText('Your Email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
  })
})
