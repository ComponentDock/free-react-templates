import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedPost } from './FeaturedPost'
import type { Post } from '../data'

const fullPost: Post = {
  seed: 'atlas-3',
  category: 'Travel',
  title: 'A Slow Journey Through the Highlands',
  author: 'Katy Liu',
  date: 'Sep 29, 2017 at 9:48 am',
  excerpt: 'A short excerpt about the trip.',
}

const barePost: Post = {
  seed: 'atlas-4',
  category: 'Vogue',
  title: 'A Post Without an Excerpt',
  author: 'John Dorian',
  date: 'Sep 28, 2017 at 11:20 am',
}

describe('FeaturedPost', () => {
  it('renders the thumbnail, chip, headline, excerpt, and meta', () => {
    render(<FeaturedPost post={fullPost} />)
    expect(screen.getByRole('img', { name: fullPost.title })).toBeInTheDocument()
    expect(screen.getByText(fullPost.category)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: fullPost.title })).toBeInTheDocument()
    expect(screen.getByText(fullPost.excerpt!)).toBeInTheDocument()
    expect(screen.getByText(/Katy Liu on Sep 29, 2017/)).toBeInTheDocument()
  })

  it('omits the excerpt when the post has none', () => {
    render(<FeaturedPost post={barePost} />)
    expect(screen.queryByText('A short excerpt about the trip.')).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: barePost.title })).toBeInTheDocument()
  })

  it('drops the card shadow when elevated is false', () => {
    const { container } = render(<FeaturedPost post={fullPost} elevated={false} />)
    expect(container.querySelector('article')).not.toHaveClass(
      'shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
    )
  })
})
