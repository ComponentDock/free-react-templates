import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument()
    expect(screen.getByText(/send us a message/i)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  it('renders send message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText(/your name/i), 'John')
    expect(screen.getByPlaceholderText(/your name/i)).toHaveValue('John')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText(/your name/i), 'Jane')
    await user.type(screen.getByPlaceholderText(/your email/i), 'jane@example.com')
    await user.type(screen.getByPlaceholderText(/subject/i), 'Hello')
    await user.type(screen.getByPlaceholderText(/message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // Form submits without throwing
  })
})
