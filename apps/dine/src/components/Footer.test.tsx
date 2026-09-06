import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Opening Hours section', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
  })

  it('renders Contact Info with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/123 Main St/)).toBeInTheDocument()
    expect(screen.getByText(/\(\+1\)/)).toBeInTheDocument()
    expect(screen.getByText(/dine@example\.com/)).toBeInTheDocument()
  })

  it('renders Quick Links with required links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    for (const label of ['About', 'Terms', 'Disclaimers', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders Component Dock link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
