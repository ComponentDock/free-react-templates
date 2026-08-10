import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  brandTitle,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightText,
  footerBlurb,
  infoHeading,
  infoLinks,
  questionsHeading,
  socials,
} from '../data'

describe('Footer', () => {
  it('renders the dark footer with logo, blurb and social circles', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-footer')

    expect(screen.getByRole('heading', { name: brandTitle })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()

    for (const social of socials) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveClass('bg-accent', 'rounded-full')
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the Info links with chevron icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: infoHeading })).toBeInTheDocument()
    for (const link of infoLinks) {
      const anchors = screen.getAllByRole('link', { name: link })
      expect(anchors.length).toBeGreaterThan(0)
      expect(anchors[0]?.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the contact block with address, phone and email', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: questionsHeading })).toBeInTheDocument()
    expect(screen.getByText(contactAddress)).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText(contactEmail)).toBeInTheDocument()
  })

  it('renders the black copyright bar with the current year', () => {
    render(<Footer />)

    const bar = screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`))
    expect(bar).toHaveTextContent(copyrightText)
  })
})
