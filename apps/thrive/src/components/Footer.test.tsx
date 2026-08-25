import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Help section', () => {
    render(<Footer />)
    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
  })

  it('renders the Support section', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Knowledge base')).toBeInTheDocument()
  })

  it('renders the Subscribe form', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows error for invalid email', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email/i })
    fireEvent.change(input, { target: { value: 'invalid' } })
    const form = input.closest('form')!
    fireEvent.submit(form)
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('subscribes with valid email', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email/i })
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    const form = input.closest('form')!
    fireEvent.submit(form)
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
