import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/Get the latest updates/)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
