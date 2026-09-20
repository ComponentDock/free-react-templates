import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/newsletter/i)).toBeInTheDocument()
    expect(screen.getByText(/subscribe and get/i)).toBeInTheDocument()
  })

  it('renders the email input and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('clears the email on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })

  it('has correct aria-label', () => {
    render(<Newsletter />)
    expect(screen.getByRole('region', { name: 'Newsletter' })).toBeInTheDocument()
  })
})
