import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Modern Construction Trends to Watch')).toBeInTheDocument()
    expect(screen.getByText('Tips for Home Renovation Success')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Building Materials Guide')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the latest innovations/)).toBeInTheDocument()
    expect(screen.getByText(/Essential tips and tricks/)).toBeInTheDocument()
    expect(screen.getByText(/A comprehensive guide/)).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(
      screen.getByRole('img', { name: 'Modern Construction Trends to Watch' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Tips for Home Renovation Success' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Sustainable Building Materials Guide' }),
    ).toBeInTheDocument()
  })

  it('renders date badges for each post', () => {
    render(<Blog />)
    // First post: 15 Jan 2026
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Jan')).toBeInTheDocument()
    // Second post: 22 Feb 2026
    expect(screen.getByText('22')).toBeInTheDocument()
    expect(screen.getByText('Feb')).toBeInTheDocument()
    // Third post: 10 Mar 2026
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Mar')).toBeInTheDocument()
  })

  it('renders Read More buttons for each post', () => {
    render(<Blog />)
    const readMoreButtons = screen.getAllByRole('button', { name: /read more about/i })
    expect(readMoreButtons).toHaveLength(3)
  })

  it('renders Read More button with correct aria-labels', () => {
    render(<Blog />)
    expect(
      screen.getByRole('button', { name: /read more about modern construction/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /read more about tips for home/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /read more about sustainable/i })).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    // Admin appears for post 1 and post 3
    const adminEntries = screen.getAllByText(/By Admin/)
    expect(adminEntries).toHaveLength(2)
    expect(screen.getByText('By Editor')).toBeInTheDocument()
  })

  it('renders comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
    expect(screen.getByText('8 Comments')).toBeInTheDocument()
  })

  it('renders the decorative brand divider', () => {
    const { container } = render(<Blog />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
