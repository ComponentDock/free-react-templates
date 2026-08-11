import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { BLOG_POSTS } from '../data'

describe('BlogSection', () => {
  it('renders the kicker and heading', () => {
    render(<BlogSection />)

    expect(screen.getByText('Our New Blog News')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Recent News' })).toBeInTheDocument()
  })

  it('renders three blog cards with seeded photos, dates and title links', () => {
    const { container } = render(<BlogSection />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)

    cards.forEach((card, index) => {
      const post = BLOG_POSTS[index]!
      const img = card.querySelector('img')
      expect(img?.getAttribute('src')).toBe(`https://picsum.photos/seed/${post.seed}/600/400`)
      const date = card.querySelector('p') as HTMLElement
      expect(date.textContent).toBe(post.date)
      expect(date.className).toMatch(/uppercase/)
      expect(screen.getByRole('link', { name: post.title })).toHaveAttribute('href', '#blog')
    })
  })

  it('overlaps the caption box and fills orange with white text on hover', () => {
    const { container } = render(<BlogSection />)

    const caption = container.querySelector('article div.relative') as HTMLElement
    expect(caption.className).toMatch(/-mt-16/)
    expect(caption.className).toMatch(/w-\[94%\]/)
    expect(caption.className).toMatch(/bg-mist/)
    expect(caption.className).toMatch(/group-hover:bg-brand/)

    // Date line and title flip to white when the card is hovered.
    const date = caption.querySelector('p') as HTMLElement
    expect(date.className).toMatch(/group-hover:text-white/)
    const title = caption.querySelector('h3') as HTMLElement
    expect(title.className).toMatch(/group-hover:text-white/)
  })
})
