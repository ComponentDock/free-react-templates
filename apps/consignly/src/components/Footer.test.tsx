import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONES, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the about widget, link columns, and contact widget', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'About Consignly.' })).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    for (const phone of CONTACT_PHONES) {
      const links = screen.getAllByRole('link', { name: phone })
      expect(links.length).toBeGreaterThanOrEqual(1)
      for (const link of links) {
        expect(link).toHaveAttribute('href', 'tel:+11234567890')
      }
    }
    expect(screen.getByRole('link', { name: CONTACT_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${CONTACT_EMAIL}`,
    )
  })

  it('renders social circles for every social key', () => {
    render(<Footer />)
    for (const key of SOCIALS) {
      expect(screen.getByRole('link', { name: key })).toBeInTheDocument()
    }
  })

  it('renders the Links and Company columns with the same five labels', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Company' })).toBeInTheDocument()
    for (const label of ['About us', 'Services', 'News', 'Careers', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(2)
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(within(contentinfo).getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
