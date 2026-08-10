import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TopPosts } from './TopPosts'
import { featurePost, stackedPosts } from '../data'

describe('TopPosts', () => {
  it('renders one large feature post and two stacked smaller posts with tags and meta', () => {
    render(<TopPosts />)

    const section = screen.getByRole('region', { name: 'Top posts' })
    expect(
      within(section).getByRole('heading', { level: 3, name: featurePost.title }),
    ).toBeInTheDocument()
    expect(
      within(section).getAllByRole('heading', { level: 4, name: stackedPosts[0]!.title }),
    ).toHaveLength(2)
    // Tags appear for each post (feature + 2 stacked).
    expect(within(section).getAllByText(featurePost.tag).length).toBe(3)
    // Meta lines render for each card.
    expect(within(section).getAllByText(featurePost.meta.author).length).toBe(3)
    expect(within(section).getAllByText(`${featurePost.meta.comments} Comments`).length).toBe(3)
  })
})
