import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  brandName,
  contactAddress,
  contactEmail,
  contactPhone,
  dockHref,
  footerAbout,
  footerColumns,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('Town').length).toBeGreaterThan(0)
    expect(screen.getByText('Hub')).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
  })

  it('renders all link columns with headings', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByText(link)).toBeInTheDocument()
      }
    }
  })

  it('renders social links with aria-labels', () => {
    render(<Footer />)
    for (const social of socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
    }
  })

  it('renders the contact section', () => {
    render(<Footer />)
    expect(screen.getByText(contactAddress)).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toHaveAttribute('href', 'tel:+14155550123')
    expect(screen.getByText(contactEmail)).toHaveAttribute('href', `mailto:${contactEmail}`)
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`Copyright © ${year} ${brandName}`))).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', dockHref)
  })

  it('renders the Have a Question heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Have a Question?' })).toBeInTheDocument()
  })
})
