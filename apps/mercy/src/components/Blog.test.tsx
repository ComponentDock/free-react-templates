import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
  })

  it('renders all four blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText(/Clean Water Systems/i)).toBeInTheDocument()
    expect(screen.getByText(/Volunteer Spotlight/i)).toBeInTheDocument()
    expect(screen.getByText(/Education Program/i)).toBeInTheDocument()
    expect(screen.getByText(/Annual Charity Gala/i)).toBeInTheDocument()
  })

  it('renders Read More buttons', () => {
    render(<Blog />)
    const readMore = screen.getAllByRole('link', { name: /Read More/i })
    expect(readMore).toHaveLength(4)
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getAllByText('Mercy Team')).toHaveLength(4)
  })
})
