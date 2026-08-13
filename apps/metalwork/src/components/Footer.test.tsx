import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { office, socials } from '../data'

describe('Footer', () => {
  it('renders the three columns with contact info and quick links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Metalwork' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()

    expect(screen.getByText(office.address)).toBeInTheDocument()
    expect(screen.getByText(office.phone)).toHaveAttribute('href', 'tel:+12424942290')
    expect(screen.getByText(office.email)).toHaveAttribute('href', 'mailto:info@yourdomain.com')

    for (const label of ['About', 'Terms of Use', 'Disclaimers', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links every social icon and credits Component Dock in the copyright bar', () => {
    render(<Footer />)

    for (const { label } of socials) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', '#contact')
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
