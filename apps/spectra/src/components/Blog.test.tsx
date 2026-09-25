import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Building Modern Web Applications')).toBeInTheDocument()
    expect(screen.getByText('The Future of Web Development')).toBeInTheDocument()
    expect(screen.getByText('Design Tips for Developers')).toBeInTheDocument()
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(3)
  })
})
