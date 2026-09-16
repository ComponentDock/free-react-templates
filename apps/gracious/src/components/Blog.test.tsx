import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText(/Clean Water/i)).toBeInTheDocument()
    expect(screen.getByText(/Volunteer Spotlight/i)).toBeInTheDocument()
    expect(screen.getByText(/Education Program/i)).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const readMore = screen.getAllByRole('link', { name: /Read more/i })
    expect(readMore).toHaveLength(3)
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2025')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2025')).toBeInTheDocument()
  })
})
