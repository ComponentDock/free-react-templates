import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb and the Quick links / Services / Contacts columns', () => {
    render(<Footer />)
    expect(screen.getByText(/full-service freight broker/)).toBeInTheDocument()
    const quick = screen.getByRole('navigation', { name: 'Quick links' })
    for (const item of ['History', 'Our Staff', 'Our Partners', 'Blog']) {
      expect(quick.textContent).toContain(item)
    }
    const services = screen.getByRole('navigation', { name: 'Services' })
    for (const item of ['Air Shipping', 'Expert Staff', 'Ground Shipping', 'Logistic Services']) {
      expect(services.textContent).toContain(item)
    }
    expect(screen.getByText('450 Strand, Charing Cross, US')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+44 20 7930 8205' })).toHaveAttribute(
      'href',
      'tel:+442079308205',
    )
    expect(screen.getByRole('link', { name: 'info@drayage.example' })).toHaveAttribute(
      'href',
      'mailto:info@drayage.example',
    )
  })

  it('renders the current-year copyright with the Component Dock link and client links', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('link', { name: 'Client Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Team' })).toBeInTheDocument()
  })
})
