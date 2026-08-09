import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the heading, blurb, and booking form fields', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
    expect(screen.getByText(/I'm available for commissions/)).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
  })

  it('shows a confirmation after the form is submitted', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Your name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your email'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getByText(/Thanks, Jane Doe/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send message' })).not.toBeInTheDocument()
  })
})
