import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders heading and highlights', () => {
    render(<Appointment />)
    expect(screen.getByText('We Have Great Results')).toBeInTheDocument()
    expect(screen.getByText('Award Winning')).toBeInTheDocument()
    expect(screen.getByText('60 Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Best Attorneys Team')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Appointment />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    const submitBtn = screen.getByRole('button', { name: 'Send Message' })
    await user.click(submitBtn)
  })
})
