import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Creative Articles' })).toBeInTheDocument()
  })

  it('renders 4 blog post cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('displays post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Design Trends to Watch in 2026')).toBeInTheDocument()
    expect(screen.getByText('Building Strong Brand Identities')).toBeInTheDocument()
  })

  it('displays post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Mar 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2026')).toBeInTheDocument()
  })

  it('renders the More Blogs button', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'More Blogs' })).toBeInTheDocument()
  })
})
