import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Aurae brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Aurae/i })).toBeInTheDocument()
  })

  it('renders Company, About Us, and Open Time headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Open Time/i })).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Classes']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Mon — Fri: 6:30am — 7:45pm')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
