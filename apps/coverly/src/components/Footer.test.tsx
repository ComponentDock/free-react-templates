import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, contact details and legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'ShieldGuard home' })).toBeInTheDocument()
    for (const column of ['Coverage', 'Resources', 'Company', 'Contact Us']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }
    for (const link of [
      'Auto Insurance',
      'Home Insurance',
      'Life Insurance',
      'Health Insurance',
      'Business Insurance',
      'Blog',
      'FAQ',
      'Claims',
      'File a Claim',
      'About',
      'Careers',
      'Licensing',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: '(555) 567-8901' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@shieldguard.com' })).toBeInTheDocument()
    for (const legal of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getByRole('link', { name: legal })).toBeInTheDocument()
    }
    expect(screen.getByText(/ShieldGuard\. All rights reserved\./)).toBeInTheDocument()
  })
})
