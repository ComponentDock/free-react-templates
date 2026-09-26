import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /get update from anywhere/i })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('allows typing an email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears the email on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))
    expect(input).toHaveValue('')
  })
})
