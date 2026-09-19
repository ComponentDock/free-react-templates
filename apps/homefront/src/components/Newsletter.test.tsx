import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits form without errors', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
