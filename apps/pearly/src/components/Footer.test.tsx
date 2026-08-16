import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, blurb and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Pearly/i })).toBeInTheDocument()
    expect(screen.getByText(/There are many variations/i)).toBeInTheDocument()
    for (const brand of ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']) {
      expect(screen.getByRole('link', { name: brand })).toBeInTheDocument()
    }
  })

  it('renders the map placeholder panel', () => {
    render(<Footer />)
    // The address appears in both the map panel and the contact column —
    // scope the assertion to the map testid.
    const map = document.querySelector('[data-testid="footer-map"]')
    expect(map).toBeInTheDocument()
    expect(within(map as HTMLElement).getByText(/Stanford Springs/i)).toBeInTheDocument()
  })

  it('renders the uppercase contact columns', () => {
    render(<Footer />)
    for (const block of ['PHONE', 'WORKING TIME', 'OUR CLINIC ADDRESS']) {
      expect(screen.getByRole('heading', { name: block })).toBeInTheDocument()
    }
  })

  it('links the bottom bar to Component Dock', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/All rights reserved/i)).toBeInTheDocument()
  })
})
