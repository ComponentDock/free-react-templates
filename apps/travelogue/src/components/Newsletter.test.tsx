import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input, and subscribe button', () => {
    render(<Newsletter />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to Our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input and clears on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'traveler@example.com')
    expect(input).toHaveValue('traveler@example.com')

    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
