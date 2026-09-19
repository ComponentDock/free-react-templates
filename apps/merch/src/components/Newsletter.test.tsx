import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /join our list/i })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits the form and clears the email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('shows the subscription description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/20% off your first purchase/i)).toBeInTheDocument()
  })
})
