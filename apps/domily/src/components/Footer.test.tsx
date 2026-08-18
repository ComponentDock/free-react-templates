import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER } from '../data'

describe('Footer', () => {
  it('renders the brand column with blurb and social icons', () => {
    render(<Footer />)

    expect(screen.getByText('DOMILY')).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    for (const label of ['Facebook', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Navigation, Services, Support and Contact Us columns', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    for (const heading of ['Navigation', 'Services', 'Support', 'Contact Us']) {
      expect(within(footer).getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    for (const link of [
      ...FOOTER.columns.navigation,
      ...FOOTER.columns.services,
      ...FOOTER.columns.support,
    ]) {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0)
    }
    expect(screen.getByText(FOOTER.contact.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.email)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.phone)).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright © 2026 All rights reserved/)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /More templates at Component Dock/ })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
