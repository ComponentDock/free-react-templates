import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts } from '../data'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section title and all three post cards', () => {
    render(<BlogSection />)

    expect(screen.getByRole('heading', { name: 'From The Blog' })).toBeInTheDocument()

    for (const post of blogPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.date).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.comments).length).toBeGreaterThan(0)
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('handles a click on a post title link without navigating', () => {
    render(<BlogSection />)

    fireEvent.click(screen.getByRole('link', { name: blogPosts[0]!.title }))
  })
})
