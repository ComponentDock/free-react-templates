import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  ADDRESS,
  BRAND,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_HREF,
  TERMS_HREF,
} from '../content'

describe('Footer', () => {
  it('is the near-black band with the light wordmark and blurb', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement
    expect(footer.className).toContain('bg-ink-800')
    expect(footer.className).toContain('pt-16')
    expect(screen.getByText(BRAND)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
  })

  it('renders the three link columns with four links each', () => {
    render(<Footer />)
    FOOTER.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
      column.links.forEach((link) => {
        expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      })
    })
  })

  it('carries the address, a well-formed tel: and the bids inbox', () => {
    render(<Footer />)
    expect(screen.getByText(ADDRESS)).toHaveAttribute('id', 'service-areas')
    const tel = screen.getByRole('link', { name: PHONE_DISPLAY })
    expect(tel).toHaveAttribute('href', PHONE_HREF)
    expect(PHONE_HREF).toBe('tel:+15550100205')
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  it('labels all three social chips and gives them live destinations', () => {
    render(<Footer />)
    FOOTER.socials.forEach((social) => {
      const chip = screen.getByRole('link', { name: social.label })
      expect(chip.getAttribute('href')).not.toBe('#')
      expect(chip.getAttribute('href')).toMatch(/^https:\/\//)
      expect(chip.querySelector('svg')).not.toBeNull()
    })
  })

  it('closes with the prequalification column and its steel button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: FOOTER.promiseHeading })).toBeVisible()
    expect(screen.getByText(FOOTER.promiseBody)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: FOOTER.promiseCta }).length).toBeGreaterThan(0)
  })

  it('links Component Dock in the legal bar, with privacy and terms', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: FOOTER.componentDock })
    expect(dock).toHaveAttribute('href', COMPONENTDOCK_HREF)
    expect(COMPONENTDOCK_HREF).toBe('https://www.componentdock.com/')
    expect(screen.getByRole('link', { name: FOOTER.privacy })).toHaveAttribute('href', PRIVACY_HREF)
    expect(screen.getByRole('link', { name: FOOTER.terms })).toHaveAttribute('href', TERMS_HREF)
    expect(screen.getByText(FOOTER.legal)).toHaveTextContent('© 2026 Mandrel')
  })

  it('has no dead anchors anywhere in the footer', () => {
    const { container } = render(<Footer />)
    container.querySelectorAll('a').forEach((anchor) => {
      expect(anchor.getAttribute('href')).not.toBe('#')
      expect(anchor.getAttribute('href')).toBeTruthy()
    })
  })
})
