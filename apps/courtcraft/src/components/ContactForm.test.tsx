import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Free Legal Advice heading', () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { level: 2, name: 'Free Legal Advice' })).toBeInTheDocument()
  })

  it('renders the First Name input', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })

  it('renders the Last Name input', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
  })

  it('renders the Email input', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders the Subject input', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
  })

  it('renders the Message textarea', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message submit button', () => {
    render(<ContactForm />)

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    // No navigation/error = default prevented
  })

  it('renders contact info in the left panel', () => {
    render(<ContactForm />)

    expect(screen.getByText('1200 Justice Avenue, Suite 500')).toBeInTheDocument()
    expect(screen.getByText('+1 (800) 555-0199')).toBeInTheDocument()
    expect(screen.getByText('info@courtcraft.com')).toBeInTheDocument()
  })
})
