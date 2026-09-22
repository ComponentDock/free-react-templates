import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  beforeEach(() => {
    render(<Blog />)
  })

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /from our blog/i })).toBeInTheDocument()
  })

  it('renders the Latest News label', () => {
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    expect(screen.getByText('Tips for Maintaining a Healthy Heart')).toBeInTheDocument()
    expect(screen.getByText('Understanding Modern Pediatric Care')).toBeInTheDocument()
    expect(screen.getByText('The Importance of Regular Checkups')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 12, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
    readMoreLinks.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#')
    })
  })

  it('has the #blog id on the section', () => {
    expect(document.getElementById('blog')).toBeInTheDocument()
  })
})
