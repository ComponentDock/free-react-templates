import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and email input', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Subscribe to Get Updated/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
  })

  it('allows typing in email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('handles form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('test@example.com')
  })
})
