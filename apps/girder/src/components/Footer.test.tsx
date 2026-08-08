import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Navigations/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Girder/i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Constructed/i)).toBeInTheDocument()
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
