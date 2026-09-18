import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders all four form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('shows error when submitting empty name', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('shows error when submitting invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'notanemail')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'alice@example.com')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText('Thank You!')).toBeInTheDocument()
    expect(screen.getByText('Your message has been sent.')).toBeInTheDocument()
  })

  it('shows green checkmark on valid name', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Alice')
    await user.tab()
    expect(screen.getByLabelText('Valid')).toBeInTheDocument()
  })

  it('shows green checkmark on valid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText('Email'), 'alice@example.com')
    await user.tab()
    expect(screen.getByLabelText('Valid')).toBeInTheDocument()
  })

  it('has phone and message placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Phone Number...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Questions/Comments...')).toBeInTheDocument()
  })

  it('focus applies coral border', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Name')
    await user.click(nameInput)
    expect(nameInput.className).toContain('focus:border-brand-coral')
  })

  it('submit button has gradient classes', () => {
    render(<ContactForm />)
    const btn = screen.getByRole('button', { name: /send/i })
    expect(btn.className).toContain('from-brand-coral')
    expect(btn.className).toContain('to-brand-pink')
  })

  it('submit button is pill shaped', () => {
    render(<ContactForm />)
    const btn = screen.getByRole('button', { name: /send/i })
    expect(btn.className).toContain('rounded-full')
  })

  it('shows coral underline on phone field focus', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByLabelText('Phone'))
    const underline = document.querySelector('.bg-brand-coral')
    expect(underline).toBeInTheDocument()
  })

  it('shows coral underline on message field focus', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByLabelText('Message'))
    const underline = document.querySelector('.bg-brand-coral')
    expect(underline).toBeInTheDocument()
  })

  it('clears error when user types in a field that had an error', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Name'), 'Alice')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('blurring phone field clears focusedField', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByLabelText('Phone'))
    expect(document.querySelector('.bg-brand-coral')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Name'))
    expect(document.querySelector('.bg-brand-coral')).not.toBeInTheDocument()
  })
})
