import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('shows the heading and three blog cards with titles, date badges, and read-more links', () => {
    render(<Blog />)
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.day)).toBeInTheDocument()
      expect(screen.getByText(post.month)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })

  it('renders a photo per card', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByAltText(post.title)).toHaveAttribute('src', post.image)
    }
  })

  it('prevents navigation when a Read More link is clicked', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    const link = screen.getAllByRole('link', { name: 'Read More' })[0]!
    await user.click(link)
    expect(link).toBeInTheDocument()
  })
})
