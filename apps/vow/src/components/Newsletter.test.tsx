import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('subscribe for a 20% discount')).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByText('subscribe')).toBeInTheDocument()
  })

  it('allows typing in email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('subscribe'))
    expect(input).toHaveValue('test@example.com')
  })
})
