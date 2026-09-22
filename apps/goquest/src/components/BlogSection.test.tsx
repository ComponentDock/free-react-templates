import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section heading', () => {
    render(<BlogSection />)
    expect(screen.getByText('Tourist Blog')).toBeInTheDocument()
    expect(screen.getByText('Our Recent news')).toBeInTheDocument()
  })

  it('renders both blog posts', () => {
    render(<BlogSection />)
    expect(screen.getByText('Exploring Hidden Gems in Southeast Asia')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Adventure Destinations for 2025')).toBeInTheDocument()
  })

  it('renders the category tags', () => {
    render(<BlogSection />)
    const categories = screen.getAllByText('Traveling')
    expect(categories.length).toBe(2)
  })

  it('renders Read more links', () => {
    render(<BlogSection />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks.length).toBe(2)
    for (const link of readMoreLinks) {
      expect(link).toHaveAttribute('href', '#blog-more')
    }
  })

  it('renders blog images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('displays date badges', () => {
    render(<BlogSection />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('22')).toBeInTheDocument()
  })
})
