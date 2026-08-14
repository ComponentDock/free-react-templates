import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from './ContactSection'
import { CONTACT } from '../data'

describe('ContactSection', () => {
  it('renders the heading, info blocks and form fields', () => {
    render(<ContactSection />)

    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.email)).toBeInTheDocument()

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Your name is required')).toBeInTheDocument()
    expect(screen.getByText('Your email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Question')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits valid input and shows a success message', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Question')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks! Your message has been sent.')
    expect(screen.queryByText('Your name is required')).not.toBeInTheDocument()
  })

  it('clears a field error while the user types', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Your name is required')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your Name'), 'J')
    expect(screen.queryByText('Your name is required')).not.toBeInTheDocument()
  })
})
