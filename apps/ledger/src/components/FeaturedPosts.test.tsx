import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FeaturedPosts } from './FeaturedPosts'
import { featuredPosts } from '../data'

describe('FeaturedPosts', () => {
  it('renders three featured post cards with category, title, meta and icon row', () => {
    render(<FeaturedPosts />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    for (const post of featuredPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.category).length).toBeGreaterThan(0)
      expect(screen.getAllByText('By Michal / March 30, 2019').length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('2 Comment')).toHaveLength(3)
    expect(screen.getAllByText('0 Like')).toHaveLength(3)
    expect(screen.getAllByText('Share')).toHaveLength(3)
  })

  it('lays the middle card text above its image', () => {
    render(<FeaturedPosts />)
    const middle = screen.getAllByRole('article')[1]!
    const text = within(middle).getByRole('heading', { name: featuredPosts[1]?.title })
    const image = within(middle).getByRole('img', { name: featuredPosts[1]?.title })
    const headingIsBeforeImage =
      text.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING
    expect(headingIsBeforeImage).toBeTruthy()
  })

  it('shows the image above the text for the outer cards', () => {
    render(<FeaturedPosts />)
    const first = screen.getAllByRole('article')[0]!
    const image = within(first).getByRole('img', { name: featuredPosts[0]?.title })
    const heading = within(first).getByRole('heading', { name: featuredPosts[0]?.title })
    const imageIsBeforeHeading =
      image.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING
    expect(imageIsBeforeHeading).toBeTruthy()
  })
})
