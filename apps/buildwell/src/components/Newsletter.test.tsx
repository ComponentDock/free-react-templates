import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and form', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe to Our Newsletter/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox'), 'bad-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('subscribes with valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })

  it('clears error when resubmitting with valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox'), 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.clear(screen.getByRole('textbox'))
    await user.type(screen.getByRole('textbox'), 'good@email.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })
})
