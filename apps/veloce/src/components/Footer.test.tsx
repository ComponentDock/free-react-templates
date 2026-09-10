import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Veloce logo link', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Veloce' })).toBeInTheDocument()
  })

  it('renders the three CTA tiles', () => {
    render(<Footer />)

    expect(screen.getByText('Appointment')).toBeInTheDocument()
    expect(screen.getByText('123-4567-7890')).toBeInTheDocument()
    expect(screen.getByText('Find us on map')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Purchase')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
    expect(screen.getByText('Shipping')).toBeInTheDocument()
    expect(screen.getByText('Return')).toBeInTheDocument()
    expect(screen.getByText('Detailing')).toBeInTheDocument()
  })

  it('renders news items', () => {
    render(<Footer />)

    expect(screen.getByText('Professional Auto Care Guide')).toBeInTheDocument()
    expect(screen.getByText('Best Practices for Car Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Understanding Engine Diagnostics')).toBeInTheDocument()
  })

  it('renders office address and contact info', () => {
    render(<Footer />)

    expect(screen.getByText('My Office')).toBeInTheDocument()
    expect(screen.getByText(/7986 Pennsylvania St/)).toBeInTheDocument()
    expect(screen.getByText('Email: Hello@veloce.dev')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Veloce`))).toBeInTheDocument()
  })
})
