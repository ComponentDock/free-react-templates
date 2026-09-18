import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
  })

  it('renders all four blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/A small river named Duden/i)).toBeInTheDocument()
    expect(screen.getByText(/The Big Oxmox/i)).toBeInTheDocument()
    expect(screen.getByText(/Bookmarksgrove even/i)).toBeInTheDocument()
    expect(screen.getByText(/Even the all-powerful Pointing has no control/i)).toBeInTheDocument()
  })

  it('renders the featured blog image', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: /featured blog post/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
