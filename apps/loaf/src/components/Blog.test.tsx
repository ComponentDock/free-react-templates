import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest from Our Blog/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'The Art of Sourdough' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Morning Pastries Guide' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pizza Night Tips' })).toBeInTheDocument()
  })

  it('renders post dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText(/September 5, 2026 \| Chef Maria/)).toBeInTheDocument()
    expect(screen.getByText(/September 3, 2026 \| Baker Tom/)).toBeInTheDocument()
    expect(screen.getByText(/September 1, 2026 \| Chef Maria/)).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(
      screen.getByText(/Discover the secrets behind our perfectly fermented/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/From croissants to Danish pastries/i)).toBeInTheDocument()
    expect(screen.getByText(/Make your pizza night perfect/i)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: 'The Art of Sourdough' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-blog1'),
    )
    expect(screen.getByRole('img', { name: 'Morning Pastries Guide' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-blog2'),
    )
    expect(screen.getByRole('img', { name: 'Pizza Night Tips' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-blog3'),
    )
  })
})
