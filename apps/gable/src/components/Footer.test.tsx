import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and the copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Archives/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Gable\. All rights reserved\./i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })

  it('clears the newsletter email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email address/i)
    await user.type(input, 'someone@example.com')
    expect(input).toHaveValue('someone@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input).toHaveValue('')
  })
})
