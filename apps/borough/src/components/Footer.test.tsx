import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { linkColumns } from '../data'

describe('Footer', () => {
  it('renders the brand, blurb, and social circles with aria-labels', () => {
    render(<Footer />)

    expect(screen.getAllByText('Borough').length).toBeGreaterThan(0)
    expect(screen.getByText('Directory and Listing')).toBeInTheDocument()

    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      const social = screen.getByRole('link', { name: label })
      expect(social.className).toMatch(/bg-brand/)
    }
  })

  it('renders the three link columns with Pricing Packages listed once', () => {
    render(<Footer />)
    for (const column of linkColumns) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Pricing Packages')).toHaveLength(1)
    expect(screen.getAllByText('About Us')).toHaveLength(1)
    expect(screen.getAllByText('Feedbacks')).toHaveLength(1)
  })

  it('renders the contact column with runtime-computed phone and mailto links', () => {
    render(<Footer />)

    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()

    const phoneLinks = screen.getAllByText('+2 392 3929 210')
    expect(phoneLinks).toHaveLength(1)
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:+23923929210')

    const email = screen.getByText('info@yourdomain.com')
    expect(email).toHaveAttribute('href', 'mailto:info@yourdomain.com')
  })

  it('renders the copyright bar with the Component Dock credit', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`Copyright © ${year} Borough`))).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
