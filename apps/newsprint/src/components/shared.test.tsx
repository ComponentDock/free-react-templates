import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostMeta } from './PostMeta'
import { PostAuthor } from './PostAuthor'
import { SectionHeading } from './SectionHeading'
import { BrandIcon } from './BrandIcon'
import { trendingPosts } from '../data'

describe('PostMeta', () => {
  it('renders category links and the date for a post', () => {
    render(<PostMeta post={trendingPosts[0]!} />)

    for (const category of trendingPosts[0]!.categories) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }
    expect(screen.getByText(trendingPosts[0]!.date)).toBeInTheDocument()
  })
})

describe('PostAuthor', () => {
  it('renders the avatar image and author name', () => {
    const { container } = render(<PostAuthor post={trendingPosts[0]!} />)

    expect(screen.getByText(trendingPosts[0]!.author)).toBeInTheDocument()
    // alt="" marks the avatar as decorative (presentation role)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
  })
})

describe('SectionHeading', () => {
  it('renders the title heading with an accent underline', () => {
    const { container } = render(<SectionHeading title="Trending" />)

    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument()
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('bg-accent')
  })
})

describe('BrandIcon', () => {
  it('renders an svg with the given brand path', () => {
    render(<BrandIcon name="facebook" />)

    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
