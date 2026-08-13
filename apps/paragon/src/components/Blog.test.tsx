import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BLOG_DATE, BLOG_HEADING, BLOG_LEAD, BLOG_LINK, BLOG_POSTS } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading, lead and four post cards', () => {
    const { container } = render(<Blog />)
    const section = screen.getByRole('region', { name: 'Blog' })

    expect(
      within(section).getByRole('heading', { level: 2, name: BLOG_HEADING }),
    ).toBeInTheDocument()
    expect(within(section).getByText(BLOG_LEAD)).toBeInTheDocument()

    for (const post of BLOG_POSTS) {
      expect(
        within(section).getByRole('heading', { level: 3, name: post.title }),
      ).toBeInTheDocument()
    }
    expect(within(section).getAllByText(BLOG_DATE)).toHaveLength(4)
    expect(within(section).getAllByRole('link', { name: /Continue Reading/ })).toHaveLength(4)
    expect(within(section).getAllByRole('link', { name: BLOG_LINK })).toHaveLength(4)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(4)
    expect(container.querySelectorAll('img[alt=""]')).toHaveLength(4)
  })
})
