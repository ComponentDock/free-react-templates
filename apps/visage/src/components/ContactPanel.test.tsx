import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactPanel } from './ContactPanel'

describe('ContactPanel', () => {
  it('renders the section heading', () => {
    render(<ContactPanel />)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('renders the contact form with inputs', () => {
    render(<ContactPanel />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactPanel />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactPanel />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
  })
})
