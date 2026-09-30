import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogGrid } from './BlogGrid'

describe('BlogGrid', () => {
  it('renders 8 blog post cards', () => {
    render(<BlogGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(8)
  })

  it('displays post titles', () => {
    render(<BlogGrid />)
    expect(screen.getAllByText(/How the gut microbes/).length).toBe(8)
  })

  it('displays post dates', () => {
    render(<BlogGrid />)
    expect(screen.getAllByText('Posted: Dec 17, 2019').length).toBe(8)
  })

  it('displays author avatars', () => {
    render(<BlogGrid />)
    const avatars = screen.getAllByRole('img', { name: 'Author avatar' })
    expect(avatars).toHaveLength(8)
  })

  it('uses a grid layout container', () => {
    const { container } = render(<BlogGrid />)
    const grid = container.firstElementChild
    expect(grid).toHaveClass('grid')
  })
})
