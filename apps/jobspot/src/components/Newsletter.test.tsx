import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
  })
})
