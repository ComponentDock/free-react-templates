import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('shows the heading and all form fields on the dark section', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toHaveClass(
      'text-primary',
    )
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toHaveAttribute(
      'placeholder',
      'Write your message here.',
    )
    expect(screen.getByRole('button', { name: 'Send Message' })).toHaveClass('bg-primary')
  })

  it('shows per-field validation errors when submitting empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid email and clears the error when fixed', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email'), '@example.com')
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
  })

  it('submits a valid form and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('First name'), 'Jane')
    await user.type(screen.getByLabelText('Last name'), 'Doe')
    await user.type(screen.getByLabelText('Subject'), 'Membership')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'I would like a trial session.')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status', { name: '' })).toHaveTextContent('Message sent successfully')
    expect(screen.getByLabelText('First name')).toHaveValue('')
  })
})
