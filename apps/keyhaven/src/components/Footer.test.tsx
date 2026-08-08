import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand blurb and four social icon links', () => {
    render(<Footer />)
    expect(screen.getByText(/Find your dream home with our curated selection/i)).toBeInTheDocument()
    for (const social of ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('shows quick links, neighborhood links and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    for (const link of [
      'Properties',
      'Agents',
      'About',
      'Contact',
      'Properties for Sale',
      'Properties for Rent',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Neighborhoods' })).toBeInTheDocument()
    for (const neighborhood of [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'The Hamptons',
      'Westchester',
      'Greenwich',
    ]) {
      expect(screen.getByRole('link', { name: neighborhood })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('100 Park Avenue, Suite 500')).toBeInTheDocument()
    expect(screen.getByText('New York, NY 10017')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 234-5678' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@keyhaven.example' })).toBeInTheDocument()
  })

  it('shows the copyright line with legal links', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Keyhaven\. All rights reserved\./)).toBeInTheDocument()
    for (const link of ['Privacy Policy', 'Terms of Service', 'Fair Housing']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
