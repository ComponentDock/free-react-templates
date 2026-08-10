import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  footerBlurb,
  footerBottomLinks,
  footerRecentPosts,
  footerVideoPosts,
  madeWithText,
  ourWorkLinks,
  quickLinks,
  siteName,
  socialLabels,
  utilitySocials,
} from '../data'

describe('Footer', () => {
  it('shows the four link columns with their content', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'QUICK LINKS' })).toBeInTheDocument()
    for (const link of quickLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'FEATURED VIDEO' })).toBeInTheDocument()
    for (const video of footerVideoPosts) {
      expect(screen.getByRole('img', { name: video.headline })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'OUR WORK' })).toBeInTheDocument()
    for (const link of ourWorkLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'RECENT POST' })).toBeInTheDocument()
    for (const post of footerRecentPosts) {
      expect(screen.getByRole('img', { name: post.headline })).toBeInTheDocument()
    }
  })

  it('shows the bottom row with logo, blurb and five radial social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()
    for (const name of utilitySocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('shows the dark bottom bar with copyright and footer links', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year} ${madeWithText}`))).toBeInTheDocument()
    for (const link of footerBottomLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
