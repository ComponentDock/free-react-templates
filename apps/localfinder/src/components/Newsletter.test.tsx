import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and input', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('allows form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })
})
