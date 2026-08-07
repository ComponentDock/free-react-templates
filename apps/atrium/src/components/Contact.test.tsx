import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and the form fields', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Send Your Message' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Us' })).toBeInTheDocument()
  })

  it('shows a success message after submitting', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Email'), 'hello@example.com')
    await user.type(screen.getByLabelText('Subject'), 'New office')
    await user.type(screen.getByLabelText('Message'), 'We need a redesign.')
    await user.click(screen.getByRole('button', { name: 'Send Us' }))

    expect(screen.getByRole('status')).toHaveTextContent(/your message has been sent/i)
    expect(screen.queryByLabelText('Your Email')).not.toBeInTheDocument()
  })
})
