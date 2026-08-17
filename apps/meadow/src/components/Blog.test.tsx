import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogAuthor, blogPosts } from '../data'

describe('Blog', () => {
  it('shows the Our Blog subheading and Recent From Blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
  })

  it('renders four blog cards with distinct titles, dates, comment counts, and link buttons', () => {
    render(<Blog />)
    const titles = blogPosts.map((post) => post.title)
    expect(new Set(titles).size).toBe(4)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(
        screen.getByText(`${blogAuthor} · ${post.date} · ${post.comments}`),
      ).toBeInTheDocument()
      expect(screen.getByText(post.snippet)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read article' }).length).toBe(4)
  })
})
