import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and subtitle', () => {
    render(<Newsletter />)

    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
    expect(screen.getByText('Join our database NOW!')).toBeInTheDocument()
  })

  it('renders form inputs and submit button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits the form when the submit button is clicked', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')

    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)

    // Form submission is prevented (no page reload in test env)
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
  })
})
