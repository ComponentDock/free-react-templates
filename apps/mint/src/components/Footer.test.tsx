import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent News/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Mint/i)).toBeInTheDocument()
  })

  it('clears the newsletter email on submit', async () => {
    const user = (await import('@testing-library/user-event')).default
    render(<Footer />)
    const input = screen.getByLabelText(/Email address/i)
    await user.type(input, 'someone@example.com')
    expect(input).toHaveValue('someone@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
