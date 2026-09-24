import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter form', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Newsletter />)
    expect(screen.getByText(/latest viral stories/)).toBeInTheDocument()
  })

  it('submits the form with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('does not show success when email is empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(button)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
