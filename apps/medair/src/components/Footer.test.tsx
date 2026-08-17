import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER } from '../data'

describe('Footer', () => {
  it('renders the brand column with blurb and four social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Medair' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    for (const label of ['Facebook', 'X', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Services, Quick Links, and Have a Questions? columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const service of FOOTER.services) {
      expect(screen.getByRole('link', { name: service })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    for (const link of FOOTER.quickLinks) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.contact.phone })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.contact.email })).toBeInTheDocument()
  })

  it('shows the copyright bar with the mandatory Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(FOOTER.copyright)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
