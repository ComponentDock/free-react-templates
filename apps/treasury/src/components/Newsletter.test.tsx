import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and form', () => {
    render(<Newsletter />)
    expect(screen.getByText('Amortization Computation')).toBeInTheDocument()
    expect(screen.getByLabelText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit Email' })).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: 'Submit Email' }))
    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Enter your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Submit Email' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })
})
