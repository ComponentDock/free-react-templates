import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, navigation links, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Car Wash/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of ['Twitter', 'Facebook', 'Pinterest']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('displays opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('shows contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
    expect(screen.getByText('info@sudsywash.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('displays the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Sudsy Car Wash\. All rights reserved/)).toBeInTheDocument()
  })
})
