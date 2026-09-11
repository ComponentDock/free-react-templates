import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Newsletter />)
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /your email/i })).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows thank you message on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /your email/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument()
  })

  it('does not show thank you if email is empty', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)

    expect(screen.queryByText(/thank you for subscribing/i)).not.toBeInTheDocument()
  })

  it('does not show thank you if email is whitespace only', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /your email/i })
    await user.type(input, '   ')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.queryByText(/thank you for subscribing/i)).not.toBeInTheDocument()
  })
})
