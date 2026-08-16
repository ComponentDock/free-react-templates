import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it("renders the 'Our Blogs' heading with the More Blog button on the same row", () => {
    render(<Blog />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Our Blogs' })
    const more = screen.getByRole('link', { name: 'More Blog' })
    expect(heading).toBeInTheDocument()
    expect(more.className).toContain('bg-brand')
    expect(heading.parentElement).toContainElement(more)
  })

  it('renders two alternating post rows with title, paragraph and Learn More link', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(2)
    for (const post of blog.posts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.paragraph)).toBeInTheDocument()
      const learn = screen.getAllByRole('link', { name: post.learnLabel })[0]!
      expect(learn.className).toContain('text-brand')
      expect(learn.className).toContain('uppercase')
    }
  })

  it('renders the photo on the left and caption on the right in both rows', () => {
    const { container } = render(<Blog />)
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(2)
    for (const article of articles) {
      const img = article.querySelector('img')
      const caption = article.querySelector('h3')
      expect(img).toBeInTheDocument()
      expect(caption).toBeInTheDocument()
      // Photo column precedes the caption column in the DOM (image left).
      expect(img!.compareDocumentPosition(caption!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
  })
})
