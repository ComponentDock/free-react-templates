import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to the newsletter')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Newsletter />)
    expect(
      screen.getByText('Get a weekly digest of our most important stories direct to your inbox.'),
    ).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your mail')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders the Send Now button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: 'Send Now' })).toBeInTheDocument()
  })

  it('renders the disclaimer text', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Place some disclaimer text here/)).toBeInTheDocument()
  })

  it('shows success state on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your mail')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Send Now' }))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
  })

  it('does not show success state initially', () => {
    render(<Newsletter />)
    expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument()
  })
})
