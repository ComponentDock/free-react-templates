import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, and subscribe button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe Now' })).toBeInTheDocument()
  })

  it('shows an error and blocks submission for an invalid email', () => {
    render(<Newsletter />)
    fireEvent.change(screen.getByLabelText('Newsletter email'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe Now' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
    expect(screen.getByLabelText('Newsletter email')).toBeInTheDocument()
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Newsletter email'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe Now' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Newsletter email')).not.toBeInTheDocument()
  })
})
