import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows the heading, form fields, and Call Us block with a phone link', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    const form = screen.getByRole('form', { name: 'Contact form' })
    expect(form).toBeInTheDocument()

    for (const label of ['First name', 'Last name', 'Email address', 'Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: /Need to know more/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 392 3929 482' })).toHaveAttribute(
      'href',
      'tel:+13923929482',
    )
  })

  it('shows a status message after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('First name'), 'Ada')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/message has been sent/i)
  })
})
