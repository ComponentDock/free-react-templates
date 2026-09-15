import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: 'Subscribe to our Newsletter' })).toBeInTheDocument()
  })

  it('renders email input and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email Address')
    const submit = screen.getByRole('button', { name: 'Subscribe' })

    await user.type(input, 'test@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })

  it('shows error message for invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email Address')
    const submit = screen.getByRole('button', { name: 'Subscribe' })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByText(/Please enter a valid email address/)).toBeInTheDocument()
  })
})
