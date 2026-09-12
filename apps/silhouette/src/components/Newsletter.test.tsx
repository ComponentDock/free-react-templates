import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Stay in the Loop')
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('has an email input with correct placeholder', () => {
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('does not reload on form submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('test@example.com')
  })
})
