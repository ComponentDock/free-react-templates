import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading, email input, and send button', () => {
    render(<Subscribe />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your e-mail/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('submits the form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    const input = screen.getByRole('textbox', { name: /your e-mail/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(input).toHaveValue('')
  })
})
