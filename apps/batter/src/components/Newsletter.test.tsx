import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and form', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe for our Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))
  })
})
