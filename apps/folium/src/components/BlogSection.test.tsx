import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'
import { posts } from '../data'

describe('BlogSection', () => {
  it('renders the centered heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders three image cards with category, title and post meta', () => {
    const { container } = render(<BlogSection />)
    const cards = container.querySelectorAll('a.group')
    expect(cards).toHaveLength(3)
    for (const post of posts) {
      expect(screen.getAllByText(post.category).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.title).length).toBeGreaterThan(0)
      expect(screen.getAllByText(`${post.author} · ${post.date}`).length).toBeGreaterThan(0)
    }
  })

  it('reveals a white panel on hover', () => {
    const { container } = render(<BlogSection />)
    const panel = container.querySelector('.translate-y-full')
    expect(panel).toBeTruthy()
    expect(panel).toHaveClass('bg-white', 'group-hover:translate-y-0')
  })
})
