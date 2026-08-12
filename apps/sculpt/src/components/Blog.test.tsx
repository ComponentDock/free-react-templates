import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the heading and three article cards with date chips', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('18')).toHaveLength(3)
    expect(screen.getAllByText('MAY')).toHaveLength(3)
    expect(screen.getAllByText('Posted by: Noah Henderson')).toHaveLength(3)
    const images = document.querySelectorAll('article img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('aria-hidden', 'true')
  })
})
