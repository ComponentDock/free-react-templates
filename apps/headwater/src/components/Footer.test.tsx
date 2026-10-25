import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { ADDRESS, BRAND, COMPONENTDOCK_HREF, EMAIL, FOOTER, PHONE_HREF } from '../content'

describe('Footer', () => {
  it('renders the brand column with address, phone and email', () => {
    render(<Footer />)
    expect(screen.getByText(BRAND)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 010-0221' })).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  it('renders three social chips with accessible names', () => {
    render(<Footer />)
    for (const social of FOOTER.socials) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link.className).toContain('h-10')
    }
  })

  it('renders the four column heads and their links', () => {
    render(<Footer />)
    const heads = screen.getAllByRole('heading', { level: 3 })
    expect(heads.map((head) => head.textContent)).toEqual([
      'Products',
      'Company',
      'Support',
      FOOTER.promiseHeading,
    ])

    expect(screen.getByRole('link', { name: 'All products' })).toHaveAttribute('href', '#products')
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', expect.stringContaining('mailto:'))
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', expect.stringContaining('mailto:'))
  })

  it('closes with the Component Dock line and the legal bar', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.legal)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.componentDock })).toHaveAttribute(
      'href',
      COMPONENTDOCK_HREF,
    )
    expect(screen.getByRole('link', { name: FOOTER.privacy })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.terms })).toBeInTheDocument()
  })
})
