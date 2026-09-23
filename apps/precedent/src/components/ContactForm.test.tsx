import { render, screen } from '@testing-library/react'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Free Consultation')
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitted empty', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows email validation error for invalid email', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Your Name'), 'John')
    await user.type(screen.getByLabelText('Your Email'), 'invalid')
    await user.type(screen.getByLabelText('Subject'), 'Test')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Your Name'), 'John Doe')
    await user.type(screen.getByLabelText('Your Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Legal help')
    await user.type(screen.getByLabelText('Message'), 'I need help with my case')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('Thank you!')
  })

  it('clears validation error when user types in field', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Your Name'), 'John')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('has aria-labelledby on section', () => {
    render(<ContactForm />)
    expect(screen.getByRole('region', { name: /Free Consultation/i })).toBeInTheDocument()
  })
})
