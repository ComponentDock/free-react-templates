import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogCard } from './BlogCard'
import { imgUrl, type BlogPost } from '../data'

const post: BlogPost = {
  title: 'Test Post Title',
  date: 'Sept. 10, 2019',
  category: 'Travel',
  comments: 5,
  excerpt: 'A short excerpt for the test card.',
  seed: 'volt-test',
}

describe('BlogCard', () => {
  it('renders a vertical card with title, meta, excerpt and Read More', () => {
    render(<BlogCard post={post} />)

    const article = screen.getByRole('article')
    expect(article).toHaveClass('group', 'hover:bg-brand', 'flex-col')

    expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.date)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: post.category })).toBeInTheDocument()
    expect(screen.getByText(`${post.comments} Comment`)).toBeInTheDocument()
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#top')

    const img = screen.getByRole('img', { name: post.title })
    expect(img).toHaveAttribute('src', imgUrl(post.seed, 600, 340))
  })

  it('renders a wide card with the image column on the left', () => {
    render(<BlogCard post={post} variant="wide" />)

    expect(screen.getByRole('article')).toHaveClass('md:flex-row')
    const img = screen.getByRole('img', { name: post.title })
    expect(img).toHaveAttribute('src', imgUrl(post.seed, 800, 600))
    expect(img.parentElement).toHaveClass('md:w-1/2')
  })

  it('supports the reversed variants: right-aligned wide and image-below-text vertical', () => {
    const { rerender } = render(<BlogCard post={post} variant="wide" reversed />)

    expect(screen.getByRole('article')).toHaveClass('md:flex-row-reverse')
    expect(screen.getByText(post.excerpt).parentElement).toHaveClass(
      'md:text-right',
      'md:items-end',
    )

    rerender(<BlogCard post={post} reversed />)
    expect(screen.getByRole('article')).toHaveClass('flex-col-reverse')
  })
})
