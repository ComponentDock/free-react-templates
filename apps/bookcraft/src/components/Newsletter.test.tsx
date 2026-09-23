import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /Subscribe For New Updates/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('shows an error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'bad-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('subscribes successfully with valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
  })
})
