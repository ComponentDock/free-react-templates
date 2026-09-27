import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Are you buying or selling?')).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
  })

  it('has an email input field', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
  })

  it('has a subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe now/i })).toBeInTheDocument()
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears the email on form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Your email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe now/i }))
    expect(input).toHaveValue('')
  })
})
