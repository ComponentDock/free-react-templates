import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  commentCount,
  footerAboutHeading,
  footerAboutText,
  footerLatestHeading,
  postDate,
  quickLinks,
  quickLinksHeading,
  readMoreLabel,
  socialHeading,
  siteName,
} from '../data'

describe('Footer', () => {
  it('renders the about column with image, text and read-more link', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerAboutHeading })).toBeInTheDocument()
    expect(screen.getByText(footerAboutText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readMoreLabel })).toBeInTheDocument()
  })

  it('renders three latest post entries with meta', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerLatestHeading })).toBeInTheDocument()
    expect(screen.getAllByText(`${postDate} • ${commentCount} comments`)).toHaveLength(3)
  })

  it('renders the quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: quickLinksHeading })).toBeInTheDocument()
    quickLinks.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('renders the social links with labels', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: socialHeading })).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram', 'Vimeo', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the current year and an original attribution', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(`Copyright © ${year} All Rights Reserved | Made with ♥ by ${siteName}`),
    ).toBeInTheDocument()
  })
})
