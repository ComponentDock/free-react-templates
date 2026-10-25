import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

/** jsdom's selector engine rejects Tailwind's bracketed/slashed class names, so match on class text. */
function byClass(container: HTMLElement, token: string): HTMLElement {
  const found = Array.from(container.querySelectorAll<HTMLElement>('*')).find((element) =>
    element.className.toString().includes(token),
  )
  if (!found) {
    throw new Error(`no element carries ${token}`)
  }
  return found
}

describe('Blog', () => {
  it('renders three posts, each with a gold category, a date and a title', () => {
    render(<Blog />)
    const section = screen.getByRole('heading', { level: 2, name: blog.heading }).closest('section')
    const articles = Array.from(section!.querySelectorAll('article')) as HTMLElement[]

    expect(articles).toHaveLength(blog.posts.length)

    for (const [index, post] of blog.posts.entries()) {
      const article = articles[index] as HTMLElement
      const title = article.querySelector('h3') as HTMLElement
      expect(title.textContent).toBe(post.title)
      expect(article.textContent).toContain(post.date)
      expect(article.textContent).toContain(post.excerpt)
      expect(article.textContent).toContain(`${post.likes} Like`)
      expect(article.textContent).toContain(`${post.comments} Comments`)
    }
  })

  it('keeps the title link gold on hover and the images lazy', () => {
    render(<Blog />)

    for (const post of blog.posts) {
      const titleLink = screen.getByRole('link', { name: post.title })
      expect(titleLink).toHaveAttribute('href', '#blog')
      expect(titleLink.className).toContain('hover:text-gold')
    }

    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveAttribute('loading', 'lazy')
    }
  })

  it('lifts a 90% white wash carrying the category and title over the image', () => {
    const { container } = render(<Blog />)
    const wash = byClass(container, 'bg-white/90')

    expect(wash.className).toContain('opacity-0')
    expect(wash.className).toContain('group-hover:opacity-100')
    expect(wash.textContent).toContain(blog.posts[0]!.category)
    expect(wash.textContent).toContain(blog.posts[0]!.title)
  })

  it('separates the cards with a 10px white gutter instead of a gap', () => {
    const { container } = render(<Blog />)
    const first = container.querySelector('article') as HTMLElement

    expect(first.className).toContain('border-b-[10px]')
    expect(first.className).toContain('border-white')
  })
})
