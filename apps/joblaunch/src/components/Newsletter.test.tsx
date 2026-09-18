import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders Send button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Send/i }))
    expect(input).toHaveValue('')
  })
})
