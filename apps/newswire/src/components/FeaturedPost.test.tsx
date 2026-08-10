import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedPost } from './FeaturedPost'
import { featuredPost } from '../data'

describe('FeaturedPost', () => {
  it('renders the headline, meta and a decorative image on a light panel', () => {
    const { container } = render(<FeaturedPost />)

    expect(screen.getByRole('heading', { level: 2, name: featuredPost.title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: featuredPost.author })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining(featuredPost.seed),
    )
  })
})
