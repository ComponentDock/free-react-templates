import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to us!')).toBeInTheDocument()
    expect(screen.getByText(/Stay updated with the latest/)).toBeInTheDocument()
  })

  it('renders email input and send button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('clears email on form submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(input).toHaveValue('')
  })
})
