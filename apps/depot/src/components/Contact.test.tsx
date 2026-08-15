import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, subheading, form fields and submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    for (const label of ['First Name', 'Last Name', 'Email', 'Subject', 'Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Email'), 'buyer@example.com')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByLabelText('Email')).toHaveValue('buyer@example.com')
  })

  it('renders the address, phone and email info column', () => {
    render(<Contact />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+1 232 3235 324')).toBeInTheDocument()
    expect(screen.getByText('youremail@domain.com')).toBeInTheDocument()
    for (const heading of ['Address', 'Phone', 'Email Address']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
  })

  it('keeps the form values after a no-op submit', () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Interested' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByLabelText('Subject')).toHaveValue('Interested')
  })
})
