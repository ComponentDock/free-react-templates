import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(screen.getByText('123 Financial District, New York, NY 10005')).toBeInTheDocument()
    expect(screen.getByText('+1 (212) 555-0189')).toBeInTheDocument()
    expect(screen.getByText('info@banknote.com')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('John')
  })

  it('allows form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
  })
})
