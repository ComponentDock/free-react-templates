import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, four info columns, and the form fields', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'If you need, Just drop us a line' }),
    ).toBeInTheDocument()
    for (const title of [
      'Visit Our Office',
      "Let's call us",
      "Let's Email Us",
      'Customer Support',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows validation errors on empty submit and a success message on valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Booking')
    await user.type(screen.getByLabelText('Message'), 'A haircut, please.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText(/Thanks, Jane Doe!/)).toBeInTheDocument()
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })
})
