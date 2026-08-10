import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { footerPosts, instagramImages, socialLabels, socialLinks } from '../data'

describe('Footer', () => {
  it('renders four recent-post columns with read-more links', () => {
    render(<Footer />)
    for (const post of footerPosts) {
      expect(screen.getAllByRole('heading', { name: post.title }).length).toBeGreaterThan(0)
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'read more' })).toHaveLength(footerPosts.length)
  })

  it('renders the Instagram strip with seven images', () => {
    render(<Footer />)
    const strip = screen.getByRole('list', { name: 'Instagram feed' })
    expect(strip.children.length).toBe(instagramImages.length)
  })

  it('renders the dark bar with copyright and social icons', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright © 2026/)).toBeInTheDocument()
    const social = screen.getByRole('list', { name: 'Footer social links' })
    expect(social.children.length).toBe(socialLinks.length)
    for (const name of socialLinks) {
      expect(within(social).getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })
})
