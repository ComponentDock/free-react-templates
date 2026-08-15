import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import {
  aboutUsLinks,
  brandBlurb,
  brandName,
  communityLinks,
  companyLinks,
  footerContact,
} from '../data'

describe('Footer', () => {
  it('renders the brand column with blurb and three social icon links', () => {
    render(<Footer />)
    const brand = screen.getByText(brandName)
    expect(brand).toBeInTheDocument()
    expect(brand.querySelector('span')).toHaveClass('text-gold')
    expect(screen.getByText(brandBlurb)).toBeInTheDocument()

    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `https://${label.toLowerCase()}.com`,
      )
    }
  })

  it('renders the three link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Community' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()

    const allLinks = [...communityLinks, ...aboutUsLinks, ...companyLinks]
    for (const link of allLinks) {
      const matches = screen.getAllByRole('link', { name: new RegExp(link.label) })
      expect(matches.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the contact column with address, phone and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(footerContact.address)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: footerContact.phone })
    expect(phone).toHaveAttribute('href', 'tel:+23923929210')
    const email = screen.getByRole('link', { name: footerContact.email })
    expect(email).toHaveAttribute('href', `mailto:${footerContact.email}`)
  })

  it('renders the copyright bar with the Component Dock link', () => {
    render(<Footer />)
    const bar = screen.getByText(/All rights reserved/)
    expect(bar).toHaveTextContent('©')
    expect(bar).toHaveTextContent('Homestead')
    const dock = within(bar).getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
