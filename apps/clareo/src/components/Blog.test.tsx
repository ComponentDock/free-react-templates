import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Blog from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Photoshoot Technique')).toBeInTheDocument()
    expect(screen.getByText('Some tricks in Photoshop for your photo')).toBeInTheDocument()
    expect(screen.getByText('50 Effects in Photoshop')).toBeInTheDocument()
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('March 10, 2026')).toBeInTheDocument()
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
  })
})
