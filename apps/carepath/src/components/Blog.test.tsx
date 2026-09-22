import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog section heading', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: /get every single update/i }),
    ).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders blog post titles', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 3, name: /hath is gathering/i }),
    ).toBeInTheDocument()
    const goodAfterLinks = screen.getAllByRole('link', { name: /also good after/i })
    expect(goodAfterLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders comment and like counts with correct pluralization', () => {
    render(<Blog />)

    // First post has 8 comments (plural)
    expect(screen.getByText(/8\s*comments/i)).toBeInTheDocument()
    // One post has 1 comment (singular)
    expect(screen.getByText(/1\s*comment$/i)).toBeInTheDocument()
    // Two posts have 0 likes (plural)
    const zeroLikes = screen.getAllByText(/0\s*likes/i)
    expect(zeroLikes).toHaveLength(2)
    // One post has 1 like (singular)
    expect(screen.getByText(/1\s*like$/i)).toBeInTheDocument()
    // Third post has 5 comments (plural)
    expect(screen.getByText(/5\s*comments/i)).toBeInTheDocument()
  })
})
