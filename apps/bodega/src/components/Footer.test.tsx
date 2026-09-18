import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Store')).toBeInTheDocument()
    expect(screen.getByText('Customer Care')).toBeInTheDocument()
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Fashion Street/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@bodega-store.com')).toBeInTheDocument()
  })

  it('shows customer care links', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Returns & Exchange')).toBeInTheDocument()
    expect(screen.getByText('Gift Voucher')).toBeInTheDocument()
  })

  it('shows information links', () => {
    render(<Footer />)
    expect(screen.getByText('Customer Services')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('shows news items', () => {
    render(<Footer />)
    expect(screen.getByText('New Summer Collection')).toBeInTheDocument()
    expect(screen.getByText('Mar 12, 2024')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
