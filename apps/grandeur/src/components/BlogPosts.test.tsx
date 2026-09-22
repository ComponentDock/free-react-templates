import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders the blog heading', () => {
    render(<BlogPosts />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Our Blog Posts')
  })

  it('renders the subtitle', () => {
    render(<BlogPosts />)
    expect(screen.getByText(/Stay updated with our latest news/)).toBeDefined()
  })

  it('renders all three blog post titles', () => {
    render(<BlogPosts />)
    expect(screen.getByText(/Discover Hidden Gems/)).toBeDefined()
    expect(screen.getByText(/Top 10 Luxury Amenities/)).toBeDefined()
    expect(screen.getByText(/Sustainable Hospitality/)).toBeDefined()
  })

  it('renders blog excerpts', () => {
    render(<BlogPosts />)
    expect(screen.getByText(/Acres of diamonds/)).toBeDefined()
    expect(screen.getByText(/From heated pools/)).toBeDefined()
    expect(screen.getByText(/reducing our carbon footprint/)).toBeDefined()
  })

  it('renders Travel category tags', () => {
    render(<BlogPosts />)
    const tags = screen.getAllByText('Travel')
    expect(tags.length).toBe(3)
  })

  it('renders dates and comment counts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('30 Sep, 2026')).toBeDefined()
    expect(screen.getByText('2 Comments')).toBeDefined()
  })

  it('renders blog post images', () => {
    render(<BlogPosts />)
    expect(screen.getByAltText(/Discover Hidden Gems/)).toBeDefined()
    expect(screen.getByAltText(/Top 10 Luxury/)).toBeDefined()
    expect(screen.getByAltText(/Sustainable Hospitality/)).toBeDefined()
  })
})
