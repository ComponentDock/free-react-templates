import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog Posts' })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)

    const titles = [
      'Top 10 Destinations for Your Next Adventure',
      'How to Pack Light for Long Trips',
      'Budget Travel Tips for 2026',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders Read More links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /Read More/ })
    expect(links).toHaveLength(3)
  })

  it('renders blog images with picsum URLs', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
