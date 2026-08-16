import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('renders the centered footer menu links above a divider', () => {
    render(<Footer />)
    const footerNav = screen.getByRole('navigation', { name: 'Footer navigation' })
    for (const link of footer.menuLinks) {
      expect(within(footerNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the about blurb and the three social icons', () => {
    render(<Footer />)
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('renders the Location widget with the address', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Location' })).toBeInTheDocument()
    expect(screen.getByText(footer.location.address)).toBeInTheDocument()
  })

  it('renders the Contact widget with phone and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText(footer.contact.phone)).toBeInTheDocument()
    expect(screen.getByText(footer.contact.email)).toBeInTheDocument()
  })

  it('credits Component Dock in the copyright bar with the mandatory link', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
