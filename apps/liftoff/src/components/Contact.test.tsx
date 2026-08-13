import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('First Name'), 'Ada')
  await user.type(screen.getByLabelText('Last Name'), 'Lovelace')
  await user.type(screen.getByLabelText('Email'), 'ada@example.com')
  await user.type(screen.getByLabelText('Subject'), 'Partnership')
  await user.type(screen.getByLabelText('Message'), 'Let us build something great together.')
}

describe('Contact', () => {
  it('renders the heading, form card and labeled fields', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()

    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows per-field errors for an empty submission and does not submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your last name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a subject')).toBeInTheDocument()
    expect(screen.getByText('Please enter a message')).toBeInTheDocument()
    // The form is still present.
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('First Name'), 'Ada')
    await user.type(screen.getByLabelText('Last Name'), 'Lovelace')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Partnership')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('swaps to a success message for a valid submission (inputs unmount)', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(
      screen.getByText('Thank you for your message! Our team will get back to you shortly.'),
    ).toBeInTheDocument()
    // The form (and its inputs) unmount after a valid send.
    expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument()
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()
  })
})
