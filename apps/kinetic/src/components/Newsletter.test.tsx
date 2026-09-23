import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { describe, expect, it } from 'vitest'

describe('Newsletter', () => {
  it('renders newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/subscribe for our newsletter/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('renders Get Started submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits newsletter form without page reload', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(/email address/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })
})
