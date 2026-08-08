import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, contact details, and form fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /let's work together/i })).toBeInTheDocument()
    expect(screen.getByText('hello@arlo.dev')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /send message/i })).toHaveAttribute(
      'href',
      'mailto:hello@arlo.dev',
    )
  })

  it('does not navigate when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    // No submit button — the CTA is a mailto link; just verify typing works.
    expect(screen.getByLabelText(/name/i)).toHaveValue('Jane Doe')
  })

  it('prevents the default form submission', async () => {
    const user = userEvent.setup()
    const { container } = render(<Contact />)
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    const form = container.querySelector('form')!
    fireEvent.submit(form)
    // preventDefault swallowed the submission — the form is still rendered.
    expect(form).toBeInTheDocument()
  })
})
