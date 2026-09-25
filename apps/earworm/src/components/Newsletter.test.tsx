import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and subtitle', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: 'Sign Up To Newsletter' })).toBeInTheDocument()
    expect(
      screen.getByText(/Subscribe to receive info on our latest news and episodes/),
    ).toBeInTheDocument()
  })

  it('shows email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('does not submit with whitespace-only email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your Email')
    await user.type(input, '   ')
    fireEvent.submit(screen.getByRole('button', { name: /Subscribe/i }).closest('form')!)
    // Should still show the form (not submitted)
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
  })

  it('submits the form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your Email')
    await user.type(input, 'test@example.com')
    fireEvent.submit(screen.getByRole('button', { name: /Subscribe/i }).closest('form')!)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })
})
