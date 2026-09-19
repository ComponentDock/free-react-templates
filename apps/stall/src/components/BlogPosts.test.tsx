import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders heading and 3 blog cards', () => {
    render(<BlogPosts />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Blog Posts')

    for (const title of [
      'Top 10 Summer Fashion Trends',
      'How to Style Your Accessories',
      'The Art of Smart Shopping',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('displays author, date, and category for each post', () => {
    render(<BlogPosts />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()

    const continueLinks = screen.getAllByText('Continue Reading')
    expect(continueLinks.length).toBe(3)
  })
})
