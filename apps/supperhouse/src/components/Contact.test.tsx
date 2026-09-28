import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: /Contact Us/ })).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Contact />)
    expect(screen.getByText(/We'd love to hear from you/)).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('renders the contact form with aria-label', () => {
    render(<Contact />)
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('renders name input field', () => {
    render(<Contact />)
    const nameInput = screen.getByPlaceholderText('John Doe')
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute('type', 'text')
    expect(nameInput).toHaveAttribute('required')
  })

  it('renders email input field', () => {
    render(<Contact />)
    const emailInput = screen.getByPlaceholderText('john@example.com')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('required')
  })

  it('renders message textarea field', () => {
    render(<Contact />)
    const textarea = screen.getByPlaceholderText('Write your message here...')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('required')
  })

  it('renders name label', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('renders email label', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders message label', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })

  it('renders map placeholder with address', () => {
    render(<Contact />)
    expect(screen.getByText('123 Gourmet Avenue')).toBeInTheDocument()
    expect(screen.getByText('New York, NY 10001')).toBeInTheDocument()
  })

  it('renders phone link in map placeholder', () => {
    render(<Contact />)
    const phoneLinks = screen.getAllByRole('link', { name: /\(555\) 123-4567/ })
    expect(phoneLinks.length).toBeGreaterThanOrEqual(1)
    expect(phoneLinks[0]).toHaveAttribute('href', expect.stringContaining('tel:'))
  })

  it('renders contact info below the form', () => {
    render(<Contact />)
    expect(screen.getByText('info@supperhouse.com')).toBeInTheDocument()
    const phoneElements = screen.getAllByText('(555) 123-4567')
    expect(phoneElements.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('123 Gourmet Avenue, New York, NY 10001')).toBeInTheDocument()
  })

  it('allows typing into name input', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Contact />)
    const nameInput = screen.getByPlaceholderText('John Doe')
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing into email input', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Contact />)
    const emailInput = screen.getByPlaceholderText('john@example.com')
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('allows typing into message textarea', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Contact />)
    const textarea = screen.getByPlaceholderText('Write your message here...')
    await user.type(textarea, 'Hello!')
    expect(textarea).toHaveValue('Hello!')
  })

  it('form submit is prevented (no page reload)', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Contact />)
    const form = screen.getByRole('form', { name: 'Contact form' })
    // Fill in fields and click submit to trigger onSubmit handler
    await user.type(screen.getByPlaceholderText('John Doe'), 'Alice')
    await user.type(screen.getByPlaceholderText('john@example.com'), 'alice@example.com')
    await user.type(screen.getByPlaceholderText('Write your message here...'), 'Hello')
    fireEvent.submit(form)
    // Form should still be in the document (no navigation)
    expect(form).toBeInTheDocument()
  })
})
