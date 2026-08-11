import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  footerColumns,
  footerCredit,
  footerPhone,
  footerPhoneHref,
  footerPhotoSeeds,
  siteName,
} from '../data'

describe('Footer', () => {
  it('renders the photo strip, logo, and copyright bar with the repo credit', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(siteName)).toBeInTheDocument()
    // The copyright bar combines the year, brand, and repo credit in one
    // paragraph, so match on substrings of that paragraph's text.
    expect(
      screen.getByText(
        (_, element) =>
          element?.tagName === 'P' &&
          (element.textContent?.includes('All rights reserved.') ?? false),
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        (_, element) =>
          element?.tagName === 'P' && (element.textContent?.includes(footerCredit) ?? false),
      ),
    ).toBeInTheDocument()

    for (const [index] of footerPhotoSeeds.entries()) {
      expect(screen.getByAltText(`Footer room photo ${index + 1}`)).toBeInTheDocument()
    }
  })

  it('renders the Location column and tel: links for the phone columns', () => {
    render(<Footer />)
    const location = footerColumns[0]!
    expect(screen.getByRole('heading', { name: location.title })).toBeInTheDocument()
    expect(screen.getByText(location.text)).toBeInTheDocument()

    const phoneLinks = screen.getAllByRole('link', { name: footerPhone })
    expect(phoneLinks).toHaveLength(3)
    for (const link of phoneLinks) {
      expect(link).toHaveAttribute('href', footerPhoneHref)
    }
  })
})
