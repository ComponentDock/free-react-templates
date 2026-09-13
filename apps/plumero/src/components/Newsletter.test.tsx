import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, description, email input, and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: /Get promotions/ })).toBeInTheDocument()
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing into the email input and submitting the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('test@example.com')
  })
})
