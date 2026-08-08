import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Follow Us/i })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })

  it('subscribes and clears the newsletter email', async () => {
    const user = (await import('@testing-library/user-event')).default
    render(<Footer />)
    const input = screen.getByLabelText(/Email address/i) as HTMLInputElement
    await user.type(input, 'design@example.com')
    expect(input.value).toBe('design@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(input.value).toBe('')
  })
})
