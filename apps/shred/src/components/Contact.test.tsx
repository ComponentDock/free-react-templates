import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { CONTACT } from '../data'

describe('Contact', () => {
  it('renders the heading, intro and the four info items', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText('Contact Number')).toBeInTheDocument()
    expect(screen.getByText(CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText(CONTACT.email)).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
    expect(screen.getByText(CONTACT.website)).toBeInTheDocument()
  })

  it('renders the form fields and the Send Message button', () => {
    render(<Contact />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows validation errors when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Your name is required')).toBeInTheDocument()
    expect(screen.getByText('Your email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows a success message after a valid submit without navigating', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Membership')
    await user.type(screen.getByLabelText('Message'), 'I would like to join the club.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(/sent/i)
  })

  it('clears a field error as soon as the user types into the field', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Your name is required')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')

    expect(screen.queryByText('Your name is required')).not.toBeInTheDocument()
    expect(screen.getByText('Your email is required')).toBeInTheDocument()
  })
})
