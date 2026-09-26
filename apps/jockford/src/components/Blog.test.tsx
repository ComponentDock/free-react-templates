import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('From the Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Renovating National Gallery: A Design Case Study')).toBeInTheDocument()
    expect(screen.getByText('WordPress for Beginners: Getting Started Guide')).toBeInTheDocument()
    expect(screen.getByText('Building Modern Websites from Scratch')).toBeInTheDocument()
  })

  it('renders blog categories', () => {
    render(<Blog />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Tutorial')).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more →')
    expect(readMoreLinks.length).toBe(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(
      screen.getByAltText('Renovating National Gallery: A Design Case Study'),
    ).toBeInTheDocument()
  })
})
