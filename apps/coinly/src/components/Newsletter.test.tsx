import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows the headline, copy, email input and Get Started button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: 'Subscribe to our Newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('validates the email and shows a confirmation on success', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(screen.getByPlaceholderText('Enter your email'))
    await user.type(screen.getByPlaceholderText('Enter your email'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Enter your email')).not.toBeInTheDocument()
  })
})
