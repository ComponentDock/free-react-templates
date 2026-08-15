import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows the heading, email input, and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Subscribe to newsletter/)
    expect(screen.getByText('newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your e-mail here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('subscribes with an email and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByPlaceholderText('Your e-mail here'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing!/)
  })
})
