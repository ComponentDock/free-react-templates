import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PopularPosts } from './PopularPosts'
import { popularFeature, popularGrid, popularPostsTitle } from '../data'

describe('PopularPosts', () => {
  it('shows the section title, one full-width feature post and a two-column grid', () => {
    render(<PopularPosts />)

    const section = screen.getByRole('region', { name: popularPostsTitle })
    expect(
      within(section).getByRole('heading', { level: 3, name: popularFeature.title }),
    ).toBeInTheDocument()
    for (const post of popularGrid) {
      expect(
        within(section).getAllByRole('heading', { level: 4, name: post.title }).length,
      ).toBeGreaterThan(0)
      expect(within(section).getAllByText(post.excerpt).length).toBeGreaterThan(0)
    }
  })
})
