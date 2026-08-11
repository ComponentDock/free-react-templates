import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  contactAddress,
  contactEmail,
  contactPhones,
  contactTitle,
  copyright,
  footerAboutBlurb,
  footerCredit,
  galleryCount,
  galleryLabel,
  galleryTitle,
  siteName,
  socialLabel,
  socialNames,
  usefulLinks,
  usefulLinksTitle,
} from '../data'

describe('Footer', () => {
  it('renders the brand, blurb, and social icon links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByText(footerAboutBlurb)).toBeInTheDocument()
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
  })

  it('renders the Usefull Links widget with every link', () => {
    render(<Footer />)

    expect(screen.getByRole('navigation', { name: usefulLinksTitle })).toBeInTheDocument()
    for (const link of usefulLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the Gallery widget with all thumbnails', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: galleryTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(galleryCount)
    for (let index = 0; index < galleryCount; index += 1) {
      expect(screen.getByAltText(galleryLabel(index))).toBeInTheDocument()
    }
  })

  it('renders the Contact widget with address, phones and email', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: contactTitle })).toBeInTheDocument()
    expect(screen.getByText(contactAddress)).toBeInTheDocument()
    expect(screen.getByText(contactPhones)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contactEmail })).toBeInTheDocument()
  })

  it('renders the bottom bar with copyright and reworded credit', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(copyright.replace('©', '©')))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(footerCredit.replace('♥', '♥')))).toBeInTheDocument()
  })
})
