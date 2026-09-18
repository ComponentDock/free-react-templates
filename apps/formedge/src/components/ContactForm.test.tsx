import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Get in touch heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Get in touch')
  })

  it('renders a Name input field', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('renders an Email input field', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders a Subject input field', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
  })

  it('renders a Message textarea', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders a Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in the Name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    await user.type(nameInput, 'John')
    expect(nameInput).toHaveValue('John')
  })

  it('allows typing in the Email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('allows typing in the Subject field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const subjectInput = screen.getByPlaceholderText('Subject')
    await user.type(subjectInput, 'Hello')
    expect(subjectInput).toHaveValue('Hello')
  })

  it('allows typing in the Message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageTextarea = screen.getByPlaceholderText('Message')
    await user.type(messageTextarea, 'Test message')
    expect(messageTextarea).toHaveValue('Test message')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
