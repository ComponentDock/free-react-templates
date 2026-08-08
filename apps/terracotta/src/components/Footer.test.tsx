import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Terracotta/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Heaven/i)).toBeInTheDocument()
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
