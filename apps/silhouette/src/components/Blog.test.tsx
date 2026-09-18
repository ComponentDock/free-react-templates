import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('displays post titles and dates', () => {
    render(<Blog />)
    expect(screen.getByText('Spring Trends to Watch')).toBeInTheDocument()
    expect(screen.getByText('Mar 12, 2026')).toBeInTheDocument()
    expect(screen.getByText('How to Build a Capsule Wardrobe')).toBeInTheDocument()
    expect(screen.getByText('Behind the Seams')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    expect(images[0]).toHaveAttribute('alt', 'Spring Trends to Watch')
  })
})
