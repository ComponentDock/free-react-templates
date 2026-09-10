import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and email input', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe for our Newsletter/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('rejects an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    const submit = screen.getByRole('button', { name: /Get Started/i })
    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('accepts a valid email and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText(/email address/i)
    const submit = screen.getByRole('button', { name: /Get Started/i })
    await user.type(input, 'test@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thank you for subscribing/i)).toBeInTheDocument()
  })
})
