import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the title and three blog cards', () => {
    render(<Blog />)
    expect(screen.getByText(blog.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: blog.title })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    blog.posts.forEach((post, index) => {
      const article = articles[index] as HTMLElement
      expect(article).toHaveTextContent(post.category)
      expect(article).toHaveTextContent(post.date)
      expect(article.querySelector('h4')).toHaveTextContent(post.title)
      expect(article.querySelector('img')).toHaveAttribute('alt', post.alt)
    })
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
  })

  it('zooms the image and turns the Read more link blue on hover', () => {
    const { container } = render(<Blog />)
    const card = container.querySelector('.group') as HTMLElement
    expect(card.querySelector('img')).toHaveClass('group-hover:scale-110')
    const readMore = card.querySelector('a') as HTMLElement
    expect(readMore).toHaveClass('hover:text-brand')

    fireEvent.mouseEnter(card)
    expect(readMore).toHaveClass('hover:text-brand')
  })
})
