import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and contact details', () => {
    render(<Footer />)

    expect(screen.getByText('Stratos')).toBeInTheDocument()
    expect(screen.getByText(/Deploy anything, scale everything/)).toBeInTheDocument()
    expect(screen.getByText('(555) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('hello@stratos.dev')).toBeInTheDocument()
    expect(screen.getByText('800 NW 6th Ave, Portland, OR 97209')).toBeInTheDocument()
  })

  it('renders the three link columns with their links', () => {
    render(<Footer />)

    for (const column of ['Products', 'Developers', 'Company']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    for (const link of [
      'Hosting',
      'Databases',
      'Edge Functions',
      'Object Storage',
      'Documentation',
      'API Reference',
      'CLI',
      'Status',
      'About',
      'Blog',
      'Careers',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders social links, the copyright line, and legal links', () => {
    render(<Footer />)

    for (const label of ['GitHub', 'Twitter', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText('© 2026 Stratos. All rights reserved.')).toBeInTheDocument()
    for (const legal of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getByRole('link', { name: legal })).toBeInTheDocument()
    }
  })
})
