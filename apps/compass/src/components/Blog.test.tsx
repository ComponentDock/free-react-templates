import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the BLOG eyebrow and section title', () => {
    render(<Blog />)
    expect(screen.getByText('BLOG')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Blog Posts' })).toBeInTheDocument()
  })

  it('renders three post cards with image, News tag, title and Continue Reading link', () => {
    render(<Blog />)
    const posts = screen.getAllByRole('article')
    expect(posts).toHaveLength(3)

    expect(screen.getAllByText('News')).toHaveLength(3)
    const readMoreLinks = screen.getAllByRole('link', { name: /Continue Reading/ })
    expect(readMoreLinks).toHaveLength(3)

    for (const post of posts) {
      expect(post.querySelector('img')).toBeInTheDocument()
      expect(within(post).getByRole('heading', { level: 3 })).toBeInTheDocument()
    }

    const section = screen.getByTestId('blog')
    expect(section.querySelectorAll('img')).toHaveLength(3)
    expect(readMoreLinks[0]!).toHaveAttribute('href', '#blog')
  })
})
