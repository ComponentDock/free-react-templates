import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading and the email form', () => {
    render(<Subscribe />)

    expect(
      screen.getByRole('heading', { name: 'Subcribe to our upcoming match' }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('rejects an invalid email with an error message', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByPlaceholderText('Enter email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a valid subscription and clears the input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByPlaceholderText('Enter email address')
    await user.type(input, 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    // The form is replaced by the success message, so the input is gone.
    expect(screen.queryByPlaceholderText('Enter email address')).not.toBeInTheDocument()
  })
})
