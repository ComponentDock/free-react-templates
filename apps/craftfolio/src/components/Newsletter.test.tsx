import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText('Join Our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/looking at blank cassettes/)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
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
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
