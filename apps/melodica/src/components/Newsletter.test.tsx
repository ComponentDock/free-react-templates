import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading and description', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subscribe')
    expect(screen.getByText(/get the latest tracks/i)).toBeInTheDocument()
  })

  it('renders email input and submit button', () => {
    render(<Newsletter />)

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument()
  })

  it('does not submit with empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const button = screen.getByRole('button', { name: /subscribe/i })
    await user.click(button)

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })
})
