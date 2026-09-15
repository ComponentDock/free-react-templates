import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog section heading', () => {
    render(<Blog />)

    expect(screen.getByText('Read')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)

    expect(screen.getByText('The Art of Minimalist Design')).toBeInTheDocument()
    expect(screen.getByText('Building Brands That Last')).toBeInTheDocument()
    expect(screen.getByText('SEO Trends to Watch in 2026')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)

    expect(screen.getByText(/less can be more in modern web design/)).toBeInTheDocument()
    expect(screen.getByText(/brand strategy/)).toBeInTheDocument()
    expect(screen.getByText(/search engine optimization/)).toBeInTheDocument()
  })

  it('renders blog metadata', () => {
    render(<Blog />)

    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('8 comments')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)

    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
    readMoreLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#blog')
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Blog className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
