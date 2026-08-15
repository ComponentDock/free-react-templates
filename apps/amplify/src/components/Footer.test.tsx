import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerContact, quickLinks, resourceLinks } from '../data'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText(footerContact.phone)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(footerContact.address))).toBeInTheDocument()
    expect(screen.getByText(/hello@amplify\.app/)).toBeInTheDocument()
    expect(screen.getByText(/Mon - Fri: 9:00 - 19:00/)).toBeInTheDocument()
    expect(screen.getByText(/Closed on Weekends/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Quick Link' })).toBeInTheDocument()
    for (const link of quickLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 4, name: 'Resources' })).toBeInTheDocument()
    for (const link of resourceLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders social icons and the Component Dock credit link', () => {
    render(<Footer />)
    for (const name of ['Twitter', 'Pinterest', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
