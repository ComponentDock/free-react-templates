import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders contact columns', () => {
    render(<Footer />)
    expect(screen.getByText('Give us a call')).toBeInTheDocument()
    expect(screen.getByText('Come & drop by')).toBeInTheDocument()
    expect(screen.getByText('Send us a message')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText('00-56 445 678 33')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('hello@treklore.com')).toBeInTheDocument()
  })

  it('has contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('allows newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
