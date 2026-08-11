import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import {
  audioLabel,
  blogExcerpt,
  blogHeading,
  blogLabel,
  blogPosts,
  postsLabel,
  quoteAuthor,
  readMoreLabel,
  videoLabel,
} from '../data'

describe('BlogGrid', () => {
  it('renders the centered intro heading above the card grid', () => {
    render(<BlogGrid />)
    expect(screen.getByRole('region', { name: postsLabel })).toBeInTheDocument()
    expect(screen.getByText(blogLabel)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: blogHeading })).toBeInTheDocument()
  })

  it('renders one article with a Read More link per blog post', () => {
    render(<BlogGrid />)
    expect(screen.getAllByRole('article')).toHaveLength(blogPosts.length)
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(blogPosts.length)
  })

  it('renders image cards with a photo, title, meta, and excerpt', () => {
    const { container } = render(<BlogGrid />)
    const imagePost = blogPosts.find((post) => post.type === 'image')!

    const heading = screen.getByRole('heading', { name: imagePost.title })
    const card = heading.closest('article')!
    expect(card.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining(imagePost.seed),
    )
    expect(card.textContent).toContain(imagePost.meta)
    expect(card.textContent).toContain(blogExcerpt)

    // Photos scale up on card hover (group-hover).
    expect(container.querySelector('article img')).toHaveClass('group-hover:scale-110')
  })

  it('renders the video card with a centered play button', () => {
    render(<BlogGrid />)
    const videoPost = blogPosts.find((post) => post.type === 'video')!
    const card = screen.getByRole('heading', { name: videoPost.title }).closest('article')!

    expect(card.querySelector('img')).not.toBeNull()
    expect(within(card).getByRole('button', { name: videoLabel })).toBeInTheDocument()
  })

  it('renders the quote card with attribution, meta, and no title heading', () => {
    render(<BlogGrid />)
    const quotePost = blogPosts.find((post) => post.type === 'quote')!

    const quote = screen.getByText(quotePost.title).closest('blockquote')!
    expect(quote.textContent).toContain(quoteAuthor)
    const card = quote.closest('article')!
    expect(card.textContent).toContain(quotePost.meta)
    expect(within(card).queryByRole('heading')).not.toBeInTheDocument()
  })

  it('renders the audio card with an audio area above its description', () => {
    render(<BlogGrid />)
    const audioPost = blogPosts.find((post) => post.type === 'audio')!
    const card = screen.getByRole('heading', { name: audioPost.title }).closest('article')!

    expect(card.querySelector(`[aria-label="${audioLabel}"]`)).not.toBeNull()
  })

  it('renders the gallery card with two side-by-side image tiles', () => {
    render(<BlogGrid />)
    const galleryPost = blogPosts.find((post) => post.type === 'gallery')!
    const card = screen.getByRole('heading', { name: galleryPost.title }).closest('article')!

    expect(card.querySelectorAll('img')).toHaveLength(2)
  })
})
