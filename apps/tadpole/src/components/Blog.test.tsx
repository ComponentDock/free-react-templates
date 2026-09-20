import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('The Benefits of Play-Based Learning')).toBeInTheDocument()
    expect(screen.getByText('Preparing Your Child for Their First Day')).toBeInTheDocument()
    expect(screen.getByText('Creative Art Projects for Toddlers')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('September 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('August 28, 2026')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More →')
    expect(links).toHaveLength(3)
  })
})
