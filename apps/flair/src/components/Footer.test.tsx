import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the four widgets with newsletter, tweet, links and contact', () => {
    const { container } = render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Our Newsletter' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.newsletterText)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Twitter Feed' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.tweet)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.tweetTime)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Link Categories' })).toBeInTheDocument()
    for (const label of FOOTER.linkCategories) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Us' })).toBeInTheDocument()
    for (const line of FOOTER.contact) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }

    // Five social icon links.
    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(SOCIALS.length)
  })

  it('renders the copyright bar with the footer nav and the Component Dock link', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`© 2026 ${BRAND}\\. All rights reserved\\.`)),
    ).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
    for (const label of FOOTER.nav) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })
})
