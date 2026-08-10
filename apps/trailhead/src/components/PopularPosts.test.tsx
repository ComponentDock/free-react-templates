import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularPosts } from './PopularPosts'
import { popularFeatured, popularHeading, popularRows } from '../data'

describe('PopularPosts', () => {
  it('renders the heading, featured post and three compact rows', () => {
    render(<PopularPosts />)

    expect(screen.getByRole('heading', { name: popularHeading })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: new RegExp(popularFeatured.title) }),
    ).toBeInTheDocument()
    for (const post of popularRows) {
      expect(screen.getByRole('link', { name: new RegExp(post.title) })).toBeInTheDocument()
    }
  })
})
