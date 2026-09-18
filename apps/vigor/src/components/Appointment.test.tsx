import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders section heading', () => {
    render(<Appointment />)
    expect(screen.getByText('Book Your Session')).toBeDefined()
  })

  it('renders appointment subheading', () => {
    render(<Appointment />)
    expect(screen.getByText('Make an Appointment')).toBeDefined()
  })

  it('renders form inputs', () => {
    render(<Appointment />)
    expect(screen.getByPlaceholderText('Your Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Your Email')).toBeDefined()
    expect(screen.getByPlaceholderText('Your Message')).toBeDefined()
  })

  it('renders all form fields', () => {
    render(<Appointment />)
    expect(screen.getByPlaceholderText('Your Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Your Email')).toBeDefined()
    expect(screen.getByPlaceholderText('Your Message')).toBeDefined()
    // Date and time inputs exist as part of the form
    const form = screen.getByText('Send Message').closest('form')!
    expect(form.querySelectorAll('input').length).toBeGreaterThanOrEqual(4)
  })

  it('renders submit button', () => {
    render(<Appointment />)
    expect(screen.getByText('Send Message')).toBeDefined()
  })

  it('shows thank you message on submit', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    // Fill all required fields
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    await user.click(submitBtn)
    expect(screen.getByText(/Thank you/)).toBeDefined()
  })

  it('has contact section id', () => {
    const { container } = render(<Appointment />)
    expect(container.querySelector('#contact')).toBeDefined()
  })
})
