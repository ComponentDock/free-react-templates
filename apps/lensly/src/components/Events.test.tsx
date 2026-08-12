import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { POSTS } from '../data'
import { Events } from './Events'

describe('Events', () => {
  it('renders the centered header with amber News eyebrow and Events heading', () => {
    const { container } = render(<Events />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-white')
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Events' })).toBeInTheDocument()
  })

  it('renders three post cards with image, meta, title link, and excerpt', () => {
    render(<Events />)
    for (const post of POSTS) {
      expect(screen.getByAltText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.meta)).toBeInTheDocument()
      const title = screen.getByRole('link', { name: post.title })
      expect(title).toHaveAttribute('href', '#event')
      expect(title.className).toContain('hover:text-brand')
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(POSTS.length)
  })
})
