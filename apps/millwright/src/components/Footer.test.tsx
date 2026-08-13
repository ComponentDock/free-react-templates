import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { office, quickLinks, socials } from '../data'

describe('Footer', () => {
  it('renders the About Us, Contact Info, and Quick Links columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()

    expect(screen.getByText(office.address)).toBeInTheDocument()
    expect(screen.getByText(office.phone)).toBeInTheDocument()
    expect(screen.getByText(office.email)).toBeInTheDocument()

    for (const label of quickLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    for (const { label } of socials) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright © 2026 All rights reserved/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
