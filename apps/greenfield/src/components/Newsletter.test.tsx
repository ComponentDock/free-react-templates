import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'test@test.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
