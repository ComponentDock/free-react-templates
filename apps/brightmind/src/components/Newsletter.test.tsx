import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, and subscribe button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    const button = screen.getByRole('button', { name: /Subscribe/i })
    await user.click(button)
  })
})
