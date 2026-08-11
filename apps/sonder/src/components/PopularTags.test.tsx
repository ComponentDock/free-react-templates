import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularTags } from './PopularTags'
import { popularPosts, tagCloud } from '../data'

describe('PopularTags', () => {
  it('renders the Popular Posts heading with author + date mini-cards', () => {
    render(<PopularTags />)
    expect(screen.getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    for (const post of popularPosts) {
      const card = screen.getByRole('heading', { name: post.title }).closest('a')!
      expect(within(card).getByText(`By ${post.author} on ${post.date}`)).toBeInTheDocument()
      expect(
        card.querySelector('img')?.getAttribute('src')?.includes(`/seed/${post.seed}/`),
      ).toBe(true)
    }
  })

  it('renders the Tags heading with the tag cloud chips', () => {
    render(<PopularTags />)
    expect(screen.getByRole('heading', { name: 'Tags' })).toBeInTheDocument()
    for (const tag of tagCloud) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
