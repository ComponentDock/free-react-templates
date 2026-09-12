import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders the section heading', () => {
    render(<BlogPosts />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders both blog post titles', () => {
    render(<BlogPosts />)
    expect(screen.getByText('New Express Entry Draw Announced for Canada')).toBeInTheDocument()
    expect(screen.getByText('Australia Updates Skilled Migration Program')).toBeInTheDocument()
  })

  it('renders both blog post excerpts', () => {
    render(<BlogPosts />)
    expect(screen.getByText(/latest Express Entry draw/)).toBeInTheDocument()
    expect(screen.getByText(/significant changes to its skilled migration/)).toBeInTheDocument()
  })

  it('renders dates for both posts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('September 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 5, 2026')).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    render(<BlogPosts />)
    const links = screen.getAllByText('Read More →')
    expect(links).toHaveLength(2)
  })

  it('renders blog post images', () => {
    render(<BlogPosts />)
    const images = screen.getAllByRole('img') as HTMLImageElement[]
    const blogImages = images.filter(
      (img) =>
        img.alt === 'New Express Entry Draw Announced for Canada' ||
        img.alt === 'Australia Updates Skilled Migration Program',
    )
    expect(blogImages).toHaveLength(2)
  })
})
