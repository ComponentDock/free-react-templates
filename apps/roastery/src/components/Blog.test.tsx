import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Coffee Stories/i })).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /The Art of Single-Origin Brewing/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Cold Brew Takes Time/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Behind the Roast/i })).toBeInTheDocument()
  })

  it('renders post dates and excerpts', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText(/altitude, soil, and processing/i)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
