import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contactDetails } from '../data'

describe('Contact', () => {
  it('renders the heading and contact details', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    for (const detail of contactDetails) {
      expect(screen.getByText(detail.value)).toBeInTheDocument()
    }
  })

  it('shows per-field errors when submitting empty fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please write a message of at least 10 characters')).toBeInTheDocument()
  })

  it('clears a field error as soon as the user types a valid value', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()

    await user.type(screen.getByLabelText(/name/i), 'Ada Lovelace')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('shows a confirmation message on valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(/name/i), 'Ada Lovelace')
    await user.type(screen.getByLabelText(/email/i), 'ada@example.com')
    await user.type(
      screen.getByLabelText(/message/i),
      'I would like to book a cleaning appointment.',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(
      screen.getByText(/Thanks, Ada Lovelace! Your message has been received/i),
    ).toBeInTheDocument()
  })
})
