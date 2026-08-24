import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders site name, widgets, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getAllByText('Folio').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    // "Contact" appears as a nav link and as a footer heading — use heading role
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText('folio@example.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 89')).toBeInTheDocument()
  })

  it('has copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
