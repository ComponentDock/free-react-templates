import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and email input', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/we won/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
  })

  it('allows typing email and submitting', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    const submitBtn = screen.getByRole('button', { name: /get started/i })
    await user.click(submitBtn)
    expect(input).toHaveValue('')
  })
})
