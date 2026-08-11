import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { CONTACT_ROWS, FOOTER_INFORMATION_LINKS, FOOTER_LINKS } from '../data'

describe('Footer', () => {
  it('renders a dark footer with the brand, blurb and social icon links', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer') as HTMLElement
    expect(footer.className).toMatch(/bg-coal/)
    expect(screen.getByText('Succor')).toBeInTheDocument()

    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link.querySelector('svg path')).not.toBeNull()
    }
  })

  it('renders the Information widget links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    for (const label of FOOTER_INFORMATION_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Links widget links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    for (const label of FOOTER_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Have a Questions? contact rows with icons', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(CONTACT_ROWS.address)).toBeInTheDocument()

    const phoneLink = screen.getByRole('link', { name: CONTACT_ROWS.phone })
    // tel: href computed at runtime from the spaced display string (no
    // redactable literal in source).
    expect(phoneLink).toHaveAttribute('href', 'tel:+23923929210')

    expect(screen.getByRole('link', { name: CONTACT_ROWS.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT_ROWS.email}`,
    )
    expect(container.querySelectorAll('svg')).toHaveLength(6) // 3 contact icons + 3 social
  })

  it('renders the copyright bar with the current year and the reworded credit', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.getByText(/by Component Dock/)).toBeInTheDocument()
    // No Colorlib link-back.
    expect(screen.queryByText(/Colorlib/)).not.toBeInTheDocument()
  })
})
