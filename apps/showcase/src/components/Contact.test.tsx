import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contactInfo } from '../data'

describe('Contact', () => {
  it('shows the heading and four icon info cards', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
    for (const info of contactInfo) {
      expect(screen.getByRole('heading', { level: 3, name: info.label })).toBeInTheDocument()
      expect(screen.getByText(info.value)).toBeInTheDocument()
    }
  })

  it('shows per-field errors for an invalid submit and does not submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Your name is required')).toBeInTheDocument()
    expect(screen.getByText('Your email is required')).toBeInTheDocument()
    expect(screen.getByText('A subject is required')).toBeInTheDocument()
    expect(screen.getByText('A message is required')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('validates the email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Your Name'), 'Alex Rivera')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A message body.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
  })

  it('clears a field error as the user edits the field', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Your name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Your Name'), 'Alex')
    expect(screen.queryByText('Your name is required')).not.toBeInTheDocument()
  })

  it('replaces the form with a success state on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Name'), 'Alex Rivera')
    await user.type(screen.getByLabelText('Your Email'), 'alex@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A message body.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText('Your message has been sent successfully.')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument()
  })
})
