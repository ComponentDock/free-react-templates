import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { latestPosts, quickLinks, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the four footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Paragraph' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Post' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social' })).toBeInTheDocument()
  })

  it('renders the latest posts with thumbnail titles', () => {
    render(<Footer />)
    for (const post of latestPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the quick links and six social links', () => {
    render(<Footer />)
    for (const link of quickLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('list', { name: 'Footer social links' }).children.length).toBe(
      socialLinks.length,
    )
  })

  it('renders the copyright bar referencing the recreation', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/i)).toBeInTheDocument()
    expect(screen.getByText(/Free React Templates/i)).toBeInTheDocument()
  })
})
