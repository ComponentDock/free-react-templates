import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /A small river named Duden/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Far from the countries Vokalia/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /The Big Oxmox advised/ })).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Read More' })
    expect(links).toHaveLength(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
