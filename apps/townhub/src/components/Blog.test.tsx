import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('News and tips')
  })

  it('renders the script subheading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest tips')).toBeInTheDocument()
  })

  it('renders all blog post cards', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.category)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders images for each blog post', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('blog title links use href', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      const link = screen.getByRole('link', { name: post.title })
      expect(link).toHaveAttribute('href', '#page')
    }
  })
})
