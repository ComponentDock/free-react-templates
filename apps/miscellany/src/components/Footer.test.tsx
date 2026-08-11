import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  footerArchive,
  footerCopyright,
  footerNavigational,
  footerRecentPosts,
  footerTags,
  siteName,
} from '../data'

describe('Footer', () => {
  it('shows the brand and the four column headings', () => {
    render(<Footer />)
    expect(screen.getAllByRole('heading', { name: siteName }).length).toBeGreaterThan(0)
    for (const heading of ['Navigational', 'Recent Post', 'Archive', 'Tags']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
  })

  it('lists the navigational links', () => {
    render(<Footer />)
    const navColumn = screen.getByRole('heading', { name: 'Navigational' }).closest('div')!
    for (const link of footerNavigational) {
      expect(within(navColumn).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows three recent posts with thumbnails and dates', () => {
    const { container } = render(<Footer />)
    expect(footerRecentPosts).toHaveLength(3)
    for (const post of footerRecentPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(3)
  })

  it('lists the archive months', () => {
    render(<Footer />)
    for (const month of footerArchive) {
      expect(screen.getByRole('link', { name: month })).toBeInTheDocument()
    }
  })

  it('renders the tag chips with hover fill styling', () => {
    render(<Footer />)
    const tagsColumn = screen.getByRole('heading', { name: 'Tags' }).closest('div')!
    const tagLinks = within(tagsColumn).getAllByRole('link')
    for (const tag of footerTags) {
      const chip = tagLinks.find((link) => link.textContent === tag)
      expect(chip).toBeDefined()
      expect(chip!.className).toContain('border')
      expect(chip!.className).toContain('hover:bg-brand')
    }
  })

  it('shows the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(footerCopyright))).toBeInTheDocument()
  })
})
