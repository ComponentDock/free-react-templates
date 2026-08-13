import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the white section with three post cards (image, title, meta, excerpt)', () => {
    const { container } = render(<Blog />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-white')
    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(blogPosts.length)

    for (const post of blogPosts) {
      const title = screen.getByRole('link', { name: post.title })
      expect(title).toHaveAttribute('href', '#journal')
      expect(title.className).toContain('text-[22px]')
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      // The meta line is `date <span>by</span> author` — getNodeText only
      // reads direct text nodes, so match the containing <p> by content.
      const meta = screen.getByText(
        (_, element) => element?.tagName === 'P' && element.textContent?.includes(post.date),
      )
      expect(meta.textContent).toContain('by')
      expect(meta.textContent).toContain(post.author)
    }
  })
})
