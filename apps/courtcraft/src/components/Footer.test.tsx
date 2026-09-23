import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, FOOTER_COPY, FOOTER_NAV_LINKS, FOOTER_CONTACT, FOOTER_HOURS } from '../data'

describe('Footer', () => {
  it('renders the brand link', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: BRAND })).toHaveAttribute('href', '#home')
  })

  it('renders the footer copy text', () => {
    render(<Footer />)

    expect(screen.getByText(FOOTER_COPY)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Footer />)

    for (const link of FOOTER_NAV_LINKS) {
      const links = screen.getAllByRole('link', { name: link.label })
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the contact information heading and details', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Information' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CONTACT.email)).toBeInTheDocument()
  })

  it('renders the opening hours heading and schedule', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    for (const h of FOOTER_HOURS) {
      expect(screen.getByText(h.days)).toBeInTheDocument()
      expect(screen.getByText(h.hours)).toBeInTheDocument()
    }
  })

  it('links to componentdock.com with the correct branding', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows the copyright text', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('does not contain any colorlib references', () => {
    render(<Footer />)

    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })
})
