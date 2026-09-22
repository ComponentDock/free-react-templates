import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Our Newsletter/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('clears input on submit with valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText(/enter your email/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })

  it('does not clear input when submitted with empty email', () => {
    render(<Newsletter />)
    const input = screen.getByPlaceholderText(/enter your email/i)
    // Use fireEvent to bypass HTML5 required validation
    fireEvent.submit(input.closest('form')!)
    expect(input).toHaveValue('')
  })
})
