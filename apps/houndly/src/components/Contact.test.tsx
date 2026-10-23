import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows the two headings and the contact details', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText(/Melbourne St, South Birbane 4101 Austraila/)).toBeInTheDocument()
    expect(screen.getByText(/\+\(000\) 123 4567 89/)).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders labeled fields and a submit button', () => {
    render(<Contact />)

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits without a page reload and clears the fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const email = screen.getByLabelText('Email')
    const subject = screen.getByLabelText('Subject')
    const message = screen.getByLabelText('Message')

    await user.type(firstName, 'Jane')
    await user.type(lastName, 'Doe')
    await user.type(email, 'jane@example.com')
    await user.type(subject, 'Grooming')
    await user.type(message, 'Hello there')

    expect(firstName).toHaveValue('Jane')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(firstName).toHaveValue('')
    expect(lastName).toHaveValue('')
    expect(email).toHaveValue('')
    expect(subject).toHaveValue('')
    expect(message).toHaveValue('')
  })
})
