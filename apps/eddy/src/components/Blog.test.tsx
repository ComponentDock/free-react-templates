import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and 3 blog cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders blog post titles and excerpts', () => {
    render(<Blog />)

    expect(screen.getByText('Top 5 Beach Activities This Season')).toBeInTheDocument()
    expect(screen.getByText('New Spa Treatments Available')).toBeInTheDocument()
    expect(screen.getByText("Chef's Special Dinner Menu")).toBeInTheDocument()

    expect(screen.getByText(/best beach activities/)).toBeInTheDocument()
    expect(screen.getByText(/newly introduced spa treatments/)).toBeInTheDocument()
    expect(screen.getByText(/specially curated dinner menu/)).toBeInTheDocument()
  })

  it('renders Read More links and date badges', () => {
    render(<Blog />)

    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)

    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('renders images from picsum.photos', () => {
    render(<Blog />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos')
    }
  })
})
