import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText(/Rooms & Suites/)).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/New York, NY/)).toBeInTheDocument()
    expect(screen.getByText('+1 123 456 7890')).toBeInTheDocument()
    expect(screen.getByText('info@casamora.com')).toBeInTheDocument()
  })

  it('renders newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/©.*Casamora/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('applies custom className', () => {
    render(<Footer className="custom-class" />)
    expect(screen.getByText(/©.*Casamora/).closest('footer')).toHaveClass('custom-class')
  })
})
