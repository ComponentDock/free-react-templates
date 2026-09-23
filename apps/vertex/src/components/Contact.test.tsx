import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('07')).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText(/your name/i), 'John')
    await user.type(screen.getByPlaceholderText(/your email/i), 'john@example.com')
    await user.type(screen.getByPlaceholderText(/subject/i), 'Hello')
    await user.type(screen.getByPlaceholderText(/your message/i), 'Test message')

    expect(screen.getByPlaceholderText(/your name/i)).toHaveValue('John')
    expect(screen.getByPlaceholderText(/your email/i)).toHaveValue('john@example.com')
    expect(screen.getByPlaceholderText(/subject/i)).toHaveValue('Hello')
    expect(screen.getByPlaceholderText(/your message/i)).toHaveValue('Test message')
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText(/your name/i), 'John')
    await user.type(screen.getByPlaceholderText(/your email/i), 'john@example.com')
    await user.type(screen.getByPlaceholderText(/subject/i), 'Hello')
    await user.type(screen.getByPlaceholderText(/your message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    // Form submits without throwing
  })
})
