import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, subscribe button, and consent line', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get 20% Off Your First Order' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(/By subscribing, you agree to our Privacy Policy/i)).toBeInTheDocument()
  })

  it('shows an inline error for an invalid email and no success message', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    expect(screen.queryByText(/You're on the list/i)).not.toBeInTheDocument()
  })

  it('replaces the form with a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'shopper@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/You're on the list! Check your inbox/i)).toBeInTheDocument()
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })

  it('renders the four-feature row', () => {
    render(<Newsletter />)
    for (const feature of [
      'Exclusive Offers',
      'New Arrivals First',
      'Free Returns',
      'Style Tips',
    ]) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
  })
})
