import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders the contact heading', () => {
    render(<ContactSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders all form fields', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<ContactSection />)
    expect(screen.getByText('hello@weft.agency')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText(/123 Creative Lane/)).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByLabelText('Name'), 'John')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })

  it('has a form that handles submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    // Fill required fields and submit — should not throw or navigate
    await user.type(screen.getByLabelText('Name'), 'Test')
    await user.type(screen.getByLabelText('Email'), 'test@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    // Form still rendered — no navigation occurred
    expect(screen.getByLabelText('Name')).toHaveValue('Test')
  })
})
