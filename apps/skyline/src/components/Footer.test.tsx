import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, newsletter form, social links, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Info/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Important Links/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Skyline/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Dreamrs/i)).toBeInTheDocument()
  })

  it('clears the newsletter email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
