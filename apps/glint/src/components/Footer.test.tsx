import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with about, services, and opening hours', () => {
    render(<Footer />)

    // About
    expect(screen.getByText('Glint')).toBeInTheDocument()
    expect(screen.getByText(/Your trusted dental clinic/)).toBeInTheDocument()
    expect(screen.getByText('123 Dental Ave, Suite 100')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@glint-dental.com')).toBeInTheDocument()

    // Social
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()

    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Crowns & Bridges')).toBeInTheDocument()
    expect(screen.getByText('Dental Implants')).toBeInTheDocument()
    expect(screen.getByText('Teeth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Root Canals')).toBeInTheDocument()
    expect(screen.getByText('Wisdom Teeth')).toBeInTheDocument()
    expect(screen.getByText('Braces')).toBeInTheDocument()

    // Opening hours
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    expect(screen.getByText('8:00 AM – 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM – 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has no colorlib references', () => {
    render(<Footer />)
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })

  it('has the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
