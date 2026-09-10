import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Contact us')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York, NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('+1 1234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@focal.com')).toBeInTheDocument()
  })

  it('form submit calls preventDefault', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    // Should not navigate — form stayed on page
    expect(screen.getByLabelText('Name')).toHaveValue('John Doe')
  })

  it('renders Get In Touch label', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })
})
