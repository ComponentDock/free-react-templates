import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { BLOG_TITLE, POSTS, SECTION_IDS } from '../lib/site'

describe('Blog', () => {
  it('renders the three posts under the band heading', () => {
    const { container } = render(<Blog />)

    expect(container.querySelector('section')?.id).toBe(SECTION_IDS.news)
    expect(screen.getByRole('heading', { level: 2, name: BLOG_TITLE })).toBeInTheDocument()
    expect(container.querySelectorAll('article')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(container.querySelectorAll('svg')).toHaveLength(0)
  })

  it('keeps the italic meta row and the serif title of each post', () => {
    const { container } = render(<Blog />)
    const first = container.querySelector('article') as HTMLElement
    const meta = first.querySelector('ul') as HTMLElement

    expect([...meta.children].map((item) => item.textContent)).toEqual([
      POSTS[0]?.kind,
      POSTS[0]?.date,
      POSTS[0]?.comments,
    ])

    const title = screen.getByRole('link', { name: POSTS[0]?.title as string })

    expect(title).toHaveAttribute('href', `#${SECTION_IDS.news}`)
    expect(first.querySelector('h4')).toContainElement(title)
  })

  it('defers the card photographs and keeps them decorative', () => {
    const { container } = render(<Blog />)

    for (const photo of container.querySelectorAll('img')) {
      expect(photo).toHaveAttribute('loading', 'lazy')
      expect(photo).toHaveAttribute('alt', '')
      expect(photo).toHaveAttribute('width', '360')
      expect(photo).toHaveAttribute('height', '240')
    }
  })
})
