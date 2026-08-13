import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footer } from '../data'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the four widgets: brand, recent blog, site links, contact', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Glamour' })).toBeInTheDocument()
    for (const heading of ['Recent Blog', 'Site Links', 'Have a Questions?']) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    for (const link of footer.siteLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(footer.contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.contact.phone })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.contact.email })).toBeInTheDocument()
  })

  it('links social profiles with inline SVG brand icons', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      const link = screen.getByRole('link', { name: label })
      expect(link.querySelector('svg')).toBeInTheDocument()
    }
  })

  it('shows the copyright bar linking Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © \d{4} All rights reserved/)).toBeInTheDocument()
  })

  it('builds the phone link from the spaced display string', () => {
    render(<Footer />)
    const expected = 'tel:' + footer.contact.phone.replace(/[^\d+]/g, '')
    expect(screen.getByRole('link', { name: footer.contact.phone })).toHaveAttribute(
      'href',
      expected,
    )
  })
})
