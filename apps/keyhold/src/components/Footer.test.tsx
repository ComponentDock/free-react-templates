import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /keyhold home/i })).toBeInTheDocument()
    expect(screen.getByText(/properties that make you money/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/',
    )
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the three link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Community' })).toBeInTheDocument()
    for (const label of ['Search Properties', 'For Agents', 'Reviews', 'FAQs']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    for (const label of ['Our Story', 'Meet the team', 'Careers']) {
      // "Careers" also appears in the Company column — assert at least one match.
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }

    expect(screen.getByRole('heading', { level: 2, name: 'Company' })).toBeInTheDocument()
    for (const label of ['About Us', 'Press', 'Contact', 'Careers']) {
      // "About Us" / "Careers" also appear in other columns.
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('renders the contact column with address, phone, and email', () => {
    render(<Footer />)

    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('shows the copyright bar with a Component Dock link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} Keyhold`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
