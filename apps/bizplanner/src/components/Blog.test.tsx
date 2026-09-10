import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section title', () => {
    render(<Blog />)
    expect(screen.getByText('Our Latest Blog')).toBeDefined()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Business Strategies for 2025')).toBeDefined()
    expect(screen.getByText('The Future of Digital Marketing')).toBeDefined()
    expect(screen.getByText('Building a Strong Online Presence')).toBeDefined()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the most effective business strategies/)).toBeDefined()
  })

  it('renders author and date info', () => {
    render(<Blog />)
    const authors = screen.getAllByText(/By Admin/)
    expect(authors.length).toBe(3)
    expect(screen.getByText('Oct 15, 2025')).toBeDefined()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it('has the correct section id', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#blog-section')).not.toBeNull()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Top 10 Business Strategies for 2025')).toBeDefined()
  })
})
