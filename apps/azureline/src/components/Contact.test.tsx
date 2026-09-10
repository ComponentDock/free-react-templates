import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the contact image', () => {
    render(<Contact />)
    expect(screen.getByAltText('Contact')).toBeInTheDocument()
  })

  it('allows filling in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello!')
    expect(screen.getByPlaceholderText('Enter your name')).toHaveValue('John')
    expect(screen.getByPlaceholderText('Enter email address')).toHaveValue('john@test.com')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('Hello!')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // Form should still be visible (no navigation)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })
})
