import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog Posts')).toBeInTheDocument()
  })

  it('renders blog post entries', () => {
    render(<Blog />)
    expect(screen.getByText('Modern Design Trends to Watch')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Web Applications')).toBeInTheDocument()
    expect(screen.getByText('The Future of Creative Development')).toBeInTheDocument()
  })

  it('renders at least 3 posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBeGreaterThanOrEqual(3)
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('May 12, 2024')).toBeInTheDocument()
  })
})
