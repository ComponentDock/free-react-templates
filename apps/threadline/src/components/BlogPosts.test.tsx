import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders heading and three blog posts', () => {
    render(<BlogPosts />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    expect(screen.getByText('Fashion New Trends')).toBeInTheDocument()
    expect(screen.getByText('Eternity Bands Do Last Forever')).toBeInTheDocument()
    expect(screen.getByText('The Health Benefits Of Sunglasses')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<BlogPosts />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<BlogPosts />)
    expect(screen.getByText('16 February 2020')).toBeInTheDocument()
  })
})
