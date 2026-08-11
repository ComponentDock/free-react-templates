import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'
import { badgeClass, postImage, type Post } from '../data'

const basePost: Post = {
  id: 1,
  title: 'Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically',
  category: 'JavaScript',
  categoryId: 2,
  date: 'January 21, 2018',
  seed: 'newsstand-1',
}

describe('PostCard', () => {
  it('renders the image, colored category badge, date and title link', () => {
    render(<PostCard post={basePost} />)
    expect(screen.getByRole('img', { name: basePost.title })).toHaveAttribute(
      'src',
      postImage(basePost, 800, 500),
    )
    expect(screen.getByText(basePost.category)).toHaveClass('bg-brand')
    expect(screen.getByText(basePost.date)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: basePost.title })).toHaveClass('hover:text-brand')
  })

  it('colors the badge per category', () => {
    const { rerender } = render(<PostCard post={basePost} />)
    for (const categoryId of [1, 2, 3, 4] as const) {
      rerender(<PostCard post={{ ...basePost, categoryId }} />)
      expect(screen.getByText(basePost.category)).toHaveClass(badgeClass[categoryId])
    }
  })

  it('falls back to the ink badge when the post has no category', () => {
    render(<PostCard post={{ ...basePost, categoryId: undefined }} />)
    expect(screen.getByText(basePost.category)).toHaveClass('bg-ink')
  })

  it('renders the large variant with a bigger image', () => {
    render(<PostCard post={basePost} large />)
    expect(screen.getByRole('img', { name: basePost.title })).toHaveAttribute(
      'src',
      postImage(basePost, 1200, 675),
    )
  })
})
