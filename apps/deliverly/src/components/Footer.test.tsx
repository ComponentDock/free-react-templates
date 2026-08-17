import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  componentDockLabel,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightLine,
  footerLinks,
  footerSocials,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the light footer with widgets, contact info and Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    for (const heading of ['About Deliverly', 'Links', 'Company', 'Contact']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }

    for (const social of footerSocials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    // Links + Company columns share the same five links.
    for (const label of footerLinks) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(2)
    }
    expect(screen.getAllByText('Contact')).toHaveLength(3) // heading + two link columns

    expect(screen.getByText(contactAddress)).toBeInTheDocument()
    const telHref = `tel:${contactPhone.replace(/[^\d+]/g, '')}`
    expect(screen.getByRole('link', { name: contactPhone })).toHaveAttribute('href', telHref)
    expect(screen.getByRole('link', { name: contactEmail })).toHaveAttribute(
      'href',
      `mailto:${contactEmail}`,
    )

    expect(screen.getByText(copyrightLine)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })
})
